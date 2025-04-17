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
  "yellow_crust_ooze"
];

const relatedSymptoms = {
  vomiting: [
    "sweating",
    "abdominal_pain",
    "yellowish_skin",
    "joint_pain",
    "anxiety",
  ],
  fatigue: ["weight_loss", "lethargy", "cough", "restlessness", "mood_swings"],
  high_fever: [
    "chills",
    "cough",
    "extra_marital_contacts",
    "patches_in_throat",
    "muscle_wasting",
  ],
  chills: [
    "continuous_sneezing",
    "cough",
    "high_fever",
    "shivering",
    "watering_from_eyes",
  ],
  skin_rash: [
    "red_sore_around_nose",
    "blister",
    "silver_like_dusting",
    "skin_peeling",
    "scurring",
  ],
  yellowish_skin: [
    "nausea",
    "dark_urine",
    "swelling_of_stomach",
    "loss_of_appetite",
    "joint_pain",
  ],
  joint_pain: [
    "hip_joint_pain",
    "knee_pain",
    "silver_like_dusting",
    "skin_peeling",
    "dark_urine",
  ],
  itching: [
    "lethargy",
    "nodal_skin_eruptions",
    "dischromic_patches",
    "skin_rash",
    "burning_micturition",
  ],
  headache: [
    "blurred_and_distorted_vision",
    "spinning_movements",
    "altered_sensorium",
    "weakness_of_one_body_side",
    "loss_of_balance",
  ],
  weight_loss: [
    "restlessness",
    "fatigue",
    "mood_swings",
    "lethargy",
    "irregular_sugar_level",
  ],
};

// Store selected symptoms
let selectedSymptoms = [];


// DOM Elements
const searchInput = document.getElementById('symptom-search');
const suggestionsList = document.getElementById('suggestions');
const blurBackground = document.querySelector('.blur-background');

// Handle search input
searchInput.addEventListener('input', () => {
  const input = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Clear previous suggestions

  if (input) {
    // Filter symptoms based on input
    const filteredSymptoms = symptomList.filter(symptom =>
      symptom.toLowerCase().includes(input)
    );

    // Add each filtered symptom to the suggestions list
    filteredSymptoms.forEach(symptom => {
      const li = document.createElement('li');

      // Format symptom name for display
      li.textContent = symptom.replace(/_/g, ' ').toUpperCase();

      // Handle click on a suggestion
      li.addEventListener('click', () => {
        searchInput.value = symptom; // Keep original format for backend
        hideSuggestions(); // Hide suggestions
      });

      suggestionsList.appendChild(li);
    });

    showSuggestions(); // Show suggestions when input is non-empty
  } else {
    hideSuggestions(); // Hide suggestions if input is cleared
  }
});

// Show suggestions and blur background
function showSuggestions() {
  suggestionsList.classList.add('active');
  blurBackground.classList.add('active');
}

// Hide suggestions and blur background
function hideSuggestions() {
  suggestionsList.classList.remove('active');
  blurBackground.classList.remove('active');
}

// Hide suggestions when clicking on blur background
blurBackground.addEventListener('click', hideSuggestions);

// Hide suggestions when pressing ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideSuggestions();
  }
});

// Optional: hide suggestions when input loses focus
searchInput.addEventListener('blur', () => {
  setTimeout(hideSuggestions, 200); // Delay to allow clicking on suggestions
});


// Add symptom from the search bar to the list
const addSymptomBtn = document.getElementById('add-symptom-btn');
const selectedSymptomsList = document.getElementById('selected-symptoms-list');


addSymptomBtn.addEventListener('click', function () {
  const symptom = searchInput.value.trim();
  if (symptom && !selectedSymptoms.includes(symptom)) {
    selectedSymptoms.push(symptom);
    updateSelectedSymptomsUI(); // Update the UI
    searchInput.value = ''; // Clear search input
  }
});

const selectedSymptomsContainer = document.getElementById('selected-symptoms-container');

// Handle checkbox selection and update the selected symptoms list
function handleCheckboxChange(event) {
  const symptom = event.target.value;
  if (event.target.checked) {
    if (!selectedSymptoms.includes(symptom)) {
      selectedSymptoms.push(symptom);
    }
  } else {
    selectedSymptoms = selectedSymptoms.filter(s => s !== symptom); // Remove the symptom if unchecked
  }
  updateSelectedSymptomsUI(); // Update the selected symptoms UI
}

// Update the UI for selected symptoms and allow removal
function updateSelectedSymptomsUI() {
  const selectedSymptomsList = document.getElementById('selected-symptoms-list'); // Ensure reference is included
  selectedSymptomsList.innerHTML = ''; // Clear previous list

  selectedSymptoms.forEach(symptom => {
    const li = document.createElement('li');

    // Display the symptom in capital letters and replace underscores with spaces
    li.textContent = symptom.replace(/_/g, ' ').toUpperCase();

    const crossBtn = document.createElement('span');
    crossBtn.textContent = ' ×';
    crossBtn.classList.add('cross-btn');
    crossBtn.style.cursor = 'pointer';
    crossBtn.style.marginLeft = '10px';

    crossBtn.addEventListener('click', function () {
      // Remove the original symptom from the selected list (keep original format)
      selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
      updateSelectedSymptomsUI(); // Update UI

      // Uncheck the corresponding checkbox if the symptom was selected via checkbox
      const checkbox = document.querySelector(`input[type="checkbox"][value="${symptom}"]`);
      if (checkbox) {
        checkbox.checked = false;
      }
    });

    li.appendChild(crossBtn);
    selectedSymptomsList.appendChild(li);
  });
}

// Initial symptom submission (from initial checkboxes)
function submitInitialSymptoms() {
  const form = document.getElementById("symptomForm");
  const formData = new FormData(form);
  const initialSelected = formData.getAll("symptom");

  // Ensure at least one symptom is selected
  if (initialSelected.length === 0) {
    alert('Please select at least one symptom before proceeding.');
    return;
  }

  // Update global selectedSymptoms without overwriting
  initialSelected.forEach(symptom => {
    if (!selectedSymptoms.includes(symptom)) {
      selectedSymptoms.push(symptom);
    }
  });

  // Hide initial symptoms section
  document.getElementById("initialSymptoms").style.display = "none";

  // Show the selected symptoms container
  selectedSymptomsContainer.style.display = 'block';

  // Show related symptoms section
  document.getElementById("relatedSymptoms").style.display = "block";

  // Update the selected symptoms UI
  updateSelectedSymptomsUI();

  // Process related symptoms
  let relatedSet = new Set();
  initialSelected.forEach((symptom) => {
    if (relatedSymptoms[symptom]) {
      relatedSymptoms[symptom].forEach((related) => relatedSet.add(related.trim()));
    }
  });

  // Populate related symptoms dynamically
  const dynamicSymptomsContainer = document.getElementById("dynamicSymptoms");
  dynamicSymptomsContainer.innerHTML = ""; // Clear previous content
  relatedSet.forEach((symptom) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${symptom}" onchange="handleCheckboxChange(event)">
      ${symptom.replace(/_/g, " ").toUpperCase()}
    `;
    dynamicSymptomsContainer.appendChild(label);
    dynamicSymptomsContainer.appendChild(document.createElement("br"));
  });
}


  // Display the related symptoms dynamically
  const dynamicSymptomsDiv = document.getElementById("dynamicSymptoms");
  dynamicSymptomsDiv.innerHTML = ''; // Clear previous content
  relatedSet.forEach((symptom) => {
      const label = document.createElement("label");
      
      // Format symptom to uppercase and replace underscores with spaces
      const formattedSymptom = symptom.replace(/_/g, ' ').toUpperCase();
      
      // Create input element and add onchange event
      label.innerHTML = `<input type="checkbox" name="symptom" value="${symptom}" onchange="handleCheckboxChange(event)" /> ${formattedSymptom}`;
      
      dynamicSymptomsDiv.appendChild(label);
      dynamicSymptomsDiv.appendChild(document.createElement("br"));
  });

  updateSelectedSymptomsUI(); // Update the UI initially

  //Edit from down here


// Submit selected symptoms to the backend
function submitForm() {
  const form = document.getElementById("symptomForm");
  const formData = new FormData(form);
  const newSelected = formData.getAll("symptom");

  // Combine initial and related selected symptoms
  const finalSelectedSymptoms = [...selectedSymptoms, ...newSelected];

  // Create a symptom array with 1 for selected symptoms
  const symptomArray = symptomList.map((symptom) =>
    finalSelectedSymptoms.includes(symptom) ? 1 : 0
  );

  // Send the array to the backend
  fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symptoms: symptomArray }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Update the popup content with the prediction results
      document.getElementById("predictionResult").innerText = `Predicted Disease: ${data.disease}`;
      document.getElementById("description1Result").innerText = `${data.general_description}`;
      document.getElementById("description2Result").innerText = `${data.technical_description}`;
      document.getElementById("Precation1").innerText = `${data.precaution1}`;
      document.getElementById("Precation2").innerText = `${data.precaution2}`;
      document.getElementById("Precation3").innerText = `${data.precaution3}`;
      document.getElementById("medication").innerText = `${data.medication}`;
      document.getElementById("foodToEat").innerText = `Foods to Eat: ${data.food_to_eat}`;
      document.getElementById("foodToAvoid").innerText = `Foods to Avoid: ${data.food_to_avoid}`;

      // Show the buttons in the popup
      document.getElementById("infoButtons").style.display = 'block';

      // Display the popup
      showPopup();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to show relevant section
function showSection(sectionId) {
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Function to show the popup
function showPopup() {
  document.getElementById("popupOverlay").style.display = "flex"; // Show overlay and popup
}

// Function to close the popup
function closePopup() {
  document.getElementById("popupOverlay").style.display = "none"; // Hide overlay and popup
}





