from flask import Flask, request, jsonify, render_template, redirect, url_for, session, flash
import joblib
import numpy as np
import pandas as pd
from flask_mysqldb import MySQL
import bcrypt

# Load the saved Random Forest model
model = joblib.load('random_forest_model.pkl')

# Load the description dataset (with columns: Disease, Description1, Description2)
description_df = pd.read_csv('description2.csv')

# Load the precautions dataset
precautions_df = pd.read_csv('precautions.csv')

# Load the medication dataset
medication_df = pd.read_csv('medication.csv') 



# Initialize the Flask app
app = Flask(__name__)

# Set a secret key
app.secret_key = 'abc'


# MySQL configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'  # Use your MySQL username
app.config['MYSQL_PASSWORD'] = ''  # Use your MySQL password
app.config['MYSQL_DB'] = 'user_database'

# Initialize MySQL
mysql = MySQL(app)

# Route to serve the first page (first.html)
@app.route('/')
def first_page():
    return render_template('first.html')

# Route to serve the HTML file (index.html)
@app.route('/index')
def index():
    return render_template('index.html')

# Route for the Contact Us page
@app.route('/contactus')
def contact_us():
    return render_template('contactus.html')

@app.route('/aboutus')
def about_us():
    return render_template('aboutus.html')


# Sign-Up Route
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Insert the new user into the database
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, hashed_password))
        mysql.connection.commit()
        cursor.close()

        flash('Account created successfully! Please log in.')
        return redirect(url_for('signup'))

    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT id, name, email, password FROM users WHERE email = %s", [email])
        user = cursor.fetchone()  # Retrieve the user record
        cursor.close()

        if user and bcrypt.checkpw(password.encode('utf-8'), user[3].encode('utf-8')):  # Check hashed password
            # Set session variables
            session['user_id'] = user[0]  # ID
            session['user_name'] = user[1]  # Name
            session['user_email'] = user[2]  # Email

            flash('Login successful!')
            return redirect(url_for('user_dashboard'))  # Redirect to dashboard
        else:
            flash('Invalid email or password', 'error')

    return render_template('login.html')



# Logout Route
@app.route('/logout')
def logout():
    # Clear the session (log the user out)
    session.clear()
    flash('You have been logged out.')
    return redirect(url_for('first_page'))

@app.route('/dashboard')
def user_dashboard():
    if 'user_id' not in session:
        flash('Please log in to access the dashboard.', 'error')
        return redirect(url_for('login'))

    # Fetch user details from the session
    user_details = {
        'name': session.get('user_name', 'Guest'),
        'email': session.get('user_email', 'N/A'),
        'profile_pic': session.get('profile_picture_url', '/static/images/default-profile.jpg')
    }

    # Fetch predictions for the logged-in user from the database
    cursor = mysql.connection.cursor()
    cursor.execute("""
        SELECT symptoms, predicted_disease, prediction_date
        FROM predictions
        WHERE user_id = %s
        ORDER BY prediction_date DESC
    """, [session['user_id']])
    predictions = cursor.fetchall()
    cursor.close()

    # Render the dashboard template with user details and predictions
    return render_template('dashboard.html', user=user_details, predictions=predictions)

@app.route('/update-username', methods=['POST'])
def update_username():
    if 'user_id' not in session:
        flash('Please log in to update your details.', 'error')
        return redirect(url_for('login'))

    new_username = request.form['username']
    user_id = session['user_id']

    # Update the username in the database
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE users SET name = %s WHERE id = %s", (new_username, user_id))
    mysql.connection.commit()
    cursor.close()

    # Update session variable with the new username
    session['user_name'] = new_username

    flash('Username updated successfully!')
    return redirect(url_for('user_dashboard'))


@app.route('/update-password', methods=['POST'])
def update_password():
    if 'user_id' not in session:
        flash('Please log in to update your details.', 'error')
        return redirect(url_for('login'))

    new_password = request.form['password']
    confirm_password = request.form['confirm-password']
    user_id = session['user_id']

    if new_password != confirm_password:
        flash('Passwords do not match!', 'error')
        return redirect(url_for('user_dashboard'))

    # Hash the new password
    hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())

    # Update the password in the database
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE users SET password = %s WHERE id = %s", (hashed_password, user_id))
    mysql.connection.commit()
    cursor.close()

    flash('Password updated successfully!')
    return redirect(url_for('user_dashboard'))


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symptoms = data['symptoms']  # This should be a list of arrays
    features = np.array(symptoms).reshape(1, -1)

    # Predict the disease
    prediction = model.predict(features)
    disease = prediction[0]

    # Flatten the symptoms if they are a list of arrays
    flat_symptoms = [item for sublist in symptoms for item in sublist] if isinstance(symptoms[0], list) else symptoms
    symptoms_str = ', '.join(map(str, flat_symptoms))  # Convert all items to strings and join

    # Save prediction to the database
    cursor = mysql.connection.cursor()
    cursor.execute("""
        INSERT INTO predictions (user_id, symptoms, predicted_disease, prediction_date)
        VALUES (%s, %s, %s, NOW())
    """, (session['user_id'], symptoms_str, disease))
    mysql.connection.commit()
    cursor.close()

    # Fetch descriptions
    disease_info = description_df.loc[description_df['Disease'] == disease]
    if not disease_info.empty:
        general_description = disease_info['Description1'].values[0]
        technical_description = disease_info['Description2'].values[0]
    else:
        general_description = "General description not found."
        technical_description = "Technical description not found."

    # Fetch precautions
    precautions_info = precautions_df.loc[precautions_df['Disease'] == disease]
    precaution1, precaution2, precaution3 = ("Precaution not found.",) * 3
    if not precautions_info.empty:
        precaution1 = precautions_info['Precautions 1'].values[0]
        precaution2 = precautions_info['Precautions 2'].values[0]
        precaution3 = precautions_info['Precautions 3'].values[0]

    # Fetch medications
    medication_info = medication_df.loc[medication_df['Disease'] == disease, 'Medication']
    medication = "Medication not found."
    if not medication_info.empty:
        medication = medication_info.values[0].strip("[]").replace("'", "")

    # Fetch food information
    food_info = medication_df.loc[medication_df['Disease'] == disease]
    food_to_eat, food_to_avoid = "Food information not found.", "Food information not found."
    if not food_info.empty:
        food_to_eat = food_info['FoodToEat'].values[0].strip("[]").replace("'", "")
        food_to_avoid = food_info['FoodToAvoid'].values[0].strip("[]").replace("'", "")

    # Return the prediction details
    return jsonify({
        'disease': disease,
        'general_description': general_description,
        'technical_description': technical_description,
        'precaution1': precaution1,
        'precaution2': precaution2,
        'precaution3': precaution3,
        'medication': medication,
        'food_to_eat': food_to_eat,
        'food_to_avoid': food_to_avoid
    })


if __name__ == "__main__":
    app.run(debug=True)
