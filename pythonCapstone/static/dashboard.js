document.addEventListener("DOMContentLoaded", function () {
  // Define the symptom list corresponding to each index
  const symptomList = [
    "itching",
    "skin_rash",
    "nodal_skin_eruptions",
    "continuous_sneezing",
    "shivering",
    "chills",
    "joint_pain",
    "stomach_pain",
    "acidity",
    "ulcers_on_tongue",
    "muscle_wasting",
    "vomiting",
    "burning_micturition",
    "spotting_ urination",
    "fatigue",
    "weight_gain",
    "anxiety",
    "cold_hands_and_feets",
    "mood_swings",
    "weight_loss",
    "restlessness",
    "lethargy",
    "patches_in_throat",
    "irregular_sugar_level",
    "cough",
    "high_fever",
    "sunken_eyes",
    "breathlessness",
    "sweating",
    "dehydration",
    "indigestion",
    "headache",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "pain_behind_the_eyes",
    "back_pain",
    "constipation",
    "abdominal_pain",
    "diarrhoea",
    "mild_fever",
    "yellow_urine",
    "yellowing_of_eyes",
    "acute_liver_failure",
    "fluid_overload",
    "swelling_of_stomach",
    "swelled_lymph_nodes",
    "malaise",
    "blurred_and_distorted_vision",
    "phlegm",
    "throat_irritation",
    "redness_of_eyes",
    "sinus_pressure",
    "runny_nose",
    "congestion",
    "chest_pain",
    "weakness_in_limbs",
    "fast_heart_rate",
    "pain_during_bowel_movements",
    "pain_in_anal_region",
    "bloody_stool",
    "irritation_in_anus",
    "neck_pain",
    "dizziness",
    "cramps",
    "bruising",
    "obesity",
    "swollen_legs",
    "swollen_blood_vessels",
    "puffy_face_and_eyes",
    "enlarged_thyroid",
    "brittle_nails",
    "swollen_extremeties",
    "excessive_hunger",
    "extra_marital_contacts",
    "drying_and_tingling_lips",
    "slurred_speech",
    "knee_pain",
    "hip_joint_pain",
    "muscle_weakness",
    "stiff_neck",
    "swelling_joints",
    "movement_stiffness",
    "spinning_movements",
    "loss_of_balance",
    "unsteadiness",
    "weakness_of_one_body_side",
    "loss_of_smell",
    "bladder_discomfort",
    "foul_smell_of urine",
    "continuous_feel_of_urine",
    "passage_of_gases",
    "internal_itching",
    "toxic_look_(typhos)",
    "depression",
    "irritability",
    "muscle_pain",
    "altered_sensorium",
    "red_spots_over_body",
    "belly_pain",
    "abnormal_menstruation",
    "dischromic _patches",
    "watering_from_eyes",
    "increased_appetite",
    "polyuria",
    "family_history",
    "mucoid_sputum",
    "rusty_sputum",
    "lack_of_concentration",
    "visual_disturbances",
    "receiving_blood_transfusion",
    "receiving_unsterile_injections",
    "coma",
    "stomach_bleeding",
    "distention_of_abdomen",
    "history_of_alcohol_consumption",
    "fluid_overload.1",
    "blood_in_sputum",
    "prominent_veins_on_calf",
    "palpitations",
    "painful_walking",
    "pus_filled_pimples",
    "blackheads",
    "scurring",
    "skin_peeling",
    "silver_like_dusting",
    "small_dents_in_nails",
    "inflammatory_nails",
    "blister",
    "red_sore_around_nose",
    "yellow_crust_ooze",
    "skin_rash",
    "nodal_skin_eruptions",
    "dischromic _patches",
    "continuous_sneezing",
    "shivering",
    "chills",
    "watering_from_eyes",
    "stomach_pain",
    "acidity",
    "ulcers_on_tongue",
    "vomiting",
    "cough",
    "yellowish_skin",
    "nausea",
    "loss_of_appetite",
    "burning_micturition",
    "spotting_ urination",
    "abdominal_pain",
    "passage_of_gases",
    "indigestion",
    "muscle_wasting",
    "patches_in_throat",
    "high_fever",
    "extra_marital_contacts",
    "fatigue",
    "weight_loss",
    "restlessness",
    "lethargy",
    "irregular_sugar_level",
    "sunken_eyes",
    "dehydration",
    "diarrhoea",
    "breathlessness",
    "family_history",
    "headache",
    "chest_pain",
    "dizziness",
    "loss_of_balance",
    "lack_of_concentration",
    "blurred_and_distorted_vision",
    "excessive_hunger",
    "back_pain",
    "weakness_in_limbs",
    "neck_pain",
    "weakness_of_one_body_side",
    "altered_sensorium",
    "sweating",
    "joint_pain",
    "dark_urine",
    "yellowing_of_eyes",
    "swelling_of_stomach",
    "distention_of_abdomen",
    "constipation",
    "pain_during_bowel_movements",
    "pain_in_anal_region",
    "bloody_stool",
    "irritation_in_anus",
    "cramps",
    "bruising",
    "obesity",
    "swollen_legs",
    "weight_gain",
    "cold_hands_and_feets",
    "mood_swings",
    "anxiety",
    "knee_pain",
    "hip_joint_pain",
    "swelling_joints",
    "muscle_weakness",
    "stiff_neck",
    "movement_stiffness",
    "painful_walking",
    "spinning_movements",
    "pus_filled_pimples",
    "blackheads",
    "scurring",
    "bladder_discomfort",
    "foul_smell_of urine",
    "continuous_feel_of_urine",
    "skin_peeling",
    "silver_like_dusting",
    "small_dents_in_nails",
    "blister",
    "red_sore_around_nose",
    "yellow_crust_ooze",
  ];

  // Function to format symptoms
const formatSymptom = (symptom) => {
  return symptom
    .replace(/_/g, " ") // Replace underscores with spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};

// Get all rows from the predictions table
const rows = document.querySelectorAll("table tbody tr");

rows.forEach((row) => {
  // Get the symptoms cell (first cell in each row)
  const symptomsCell = row.cells[0];
  const symptomsArray = symptomsCell.textContent
    .trim()
    .split(", ")
    .map(Number);

  // Map the indices of '1' to their corresponding symptoms
  const selectedSymptoms = symptomsArray
    .map((value, index) => (value === 1 ? symptomList[index] : null))
    .filter((symptom) => symptom !== null); // Filter out nulls

  // Remove duplicate symptoms using a Set
  const uniqueSymptoms = [...new Set(selectedSymptoms)];

  // Format symptoms to be capitalized with spaces
  const formattedSymptoms = uniqueSymptoms.map(formatSymptom);

  // Replace the cell content with readable, unique, formatted symptom names
  symptomsCell.textContent = formattedSymptoms.join(", ");
});

});

document.addEventListener('DOMContentLoaded', () => {
  const editButton = document.getElementById('edit-button'); // Edit button to open modal
  const modal = document.getElementById('edit-modal'); // Modal element
  const closeModal = document.getElementById('close-modal'); // Close button inside modal

  // Open modal on edit button click
  editButton.addEventListener('click', () => {
    modal.classList.remove('hidden'); // Show modal by removing 'hidden' class
  });

  // Close modal on close button click
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal by adding 'hidden' class
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden'); // Hide modal when clicking outside the modal content
    }
  });

  // Handle Username Form Submission
  document.getElementById('edit-username-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById('username').value.trim();

    if (newUsername === "") {
      alert('Please enter a valid username.');
      return;
    }

    // Perform AJAX request to update the username without reloading the page
    fetch('/update-username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(newUsername)}`,
    })
      .then(response => response.text())
      .then(data => {
        alert('Username updated successfully.');
        modal.classList.add('hidden'); // Hide modal after success
        location.reload(); // Reload the page to reflect updated username
      })
      .catch(error => {
        console.error('Error updating username:', error);
      });
  });

  // Handle Password Form Submission
  document.getElementById('edit-password-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const newPassword = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (newPassword === "" || confirmPassword === "") {
      alert('Please fill in both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Perform AJAX request to update the password without reloading the page
    fetch('/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `password=${encodeURIComponent(newPassword)}&confirm-password=${encodeURIComponent(confirmPassword)}`,
    })
      .then(response => response.text())
      .then(data => {
        alert('Password updated successfully.');
        modal.classList.add('hidden'); // Hide modal after success
      })
      .catch(error => {
        console.error('Error updating password:', error);
      });
  });
});
