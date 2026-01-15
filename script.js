// Medical Data
const medicalConditions = [
    {
        id: "headache",
        name: "Headache / Migraine",
        description: "Pain or discomfort in the head or face. Migraines are intense, throbbing headaches often with nausea.",
        symptoms: ["Throbbing pain", "Sensitivity to light/sound", "Nausea", "Dizziness"],
        otcCategory: "Analgesics (Pain Relievers)",
        consultDoctor: "If headache is severe, sudden, or follows a head injury.",
        homeCare: "Rest in a dark room, stay hydrated, apply cold/warm compress.",
        riskLevel: "Low to Medium"
    },
    {
        id: "fever",
        name: "Fever",
        description: "A temporary increase in body temperature, often due to an illness.",
        symptoms: ["High temperature", "Chills", "Sweating", "Weakness"],
        otcCategory: "Antipyretics (Fever Reducers)",
        consultDoctor: "If fever exceeds 103°F (39.4°C) or lasts more than 3 days.",
        homeCare: "Drink plenty of fluids, rest, wear light clothing.",
        riskLevel: "Medium"
    },
    {
        id: "cold",
        name: "Common Cold",
        description: "Viral infection of the nose and throat.",
        symptoms: ["Runny nose", "Sneezing", "Sore throat", "Congestion"],
        otcCategory: "Decongestants, Antihistamines",
        consultDoctor: "If symptoms last more than 10 days or worsen.",
        homeCare: "Rest, hydration, gargle with salt water.",
        riskLevel: "Low"
    },
    {
        id: "flu",
        name: "Flu (Influenza)",
        description: "Viral infection attacking the respiratory system.",
        symptoms: ["Fever", "Aching muscles", "Chills", "Fatigue"],
        otcCategory: "Antipyretics, Analgesics",
        consultDoctor: "If breathing difficulty occurs or symptoms are severe.",
        homeCare: "Rest, fluids, steam inhalation.",
        riskLevel: "Medium"
    },
    {
        id: "cough",
        name: "Cough",
        description: "Reflex action to clear airways of mucus and irritants.",
        symptoms: ["Persistent coughing", "Sore throat", "Chest tightness"],
        otcCategory: "Cough Suppressants, Expectorants",
        consultDoctor: "If coughing up blood or lasting > 3 weeks.",
        homeCare: "Honey and warm water, steam inhalation, hydration.",
        riskLevel: "Low"
    },
    {
        id: "sore_throat",
        name: "Sore Throat",
        description: "Pain, scratchiness, or irritation of the throat that often worsens when you swallow.",
        symptoms: ["Pain when swallowing", "Scratchy sensation", "Swollen glands"],
        otcCategory: "Lozenges, Analgesics",
        consultDoctor: "If difficulty breathing or swallowing, or high fever.",
        homeCare: "Salt water gargle, warm fluids, honey.",
        riskLevel: "Low"
    },
    {
        id: "stomach_ache",
        name: "Stomach Ache",
        description: "Pain that occurs between the chest and pelvic regions.",
        symptoms: ["Cramping", "Nausea", "Bloating"],
        otcCategory: "Antacids, Antidiarrheals (if needed)",
        consultDoctor: "If pain is severe, bloody stool, or persistent vomiting.",
        homeCare: "Avoid solid food for a few hours, sip water, heating pad.",
        riskLevel: "Low to Medium"
    },
    {
        id: "acidity",
        name: "Acidity / Heartburn",
        description: "Burning pain in the chest area, usually after eating.",
        symptoms: ["Burning sensation in chest", "Sour taste", "Bloating"],
        otcCategory: "Antacids, H2 Blockers",
        consultDoctor: "If frequent heartburn or difficulty swallowing.",
        homeCare: "Avoid spicy foods, don't lie down immediately after eating.",
        riskLevel: "Low"
    },
    {
        id: "diarrhea",
        name: "Diarrhea",
        description: "Loose, watery stools that occur more frequently than usual.",
        symptoms: ["Watery stool", "Cramping", "Dehydration"],
        otcCategory: "Antidiarrheals, Oral Rehydration Salts (ORS)",
        consultDoctor: "If signs of dehydration, blood in stool, or high fever.",
        homeCare: "Drink plenty of fluids (ORS), avoid dairy/fatty foods.",
        riskLevel: "Medium"
    },
    {
        id: "constipation",
        name: "Constipation",
        description: "Infrequent bowel movements or difficult passage of stools.",
        symptoms: ["Hard stools", "Straining", "Abdominal pain"],
        otcCategory: "Laxatives, Stool Softeners",
        consultDoctor: "If severe pain or blood in stool.",
        homeCare: "Increase fiber intake, drink water, exercise.",
        riskLevel: "Low"
    },
    {
        id: "food_poisoning",
        name: "Food Poisoning (Mild)",
        description: "Illness caused by eating contaminated food.",
        symptoms: ["Nausea", "Vomiting", "Diarrhea", "Cramps"],
        otcCategory: "Antidiarrheals, ORS",
        consultDoctor: "If signs of dehydration or bloody vomit/stool.",
        homeCare: "Rest stomach, gradual fluid intake.",
        riskLevel: "Medium"
    },
    {
        id: "back_pain",
        name: "Back Pain",
        description: "Physical discomfort occurring anywhere on the spine or back.",
        symptoms: ["Aching", "Stiffness", "Sharp pain"],
        otcCategory: "Analgesics, Topical Pain Relief",
        consultDoctor: "If numbness in legs or follows an injury.",
        homeCare: "Rest, ice/heat therapy, gentle stretching.",
        riskLevel: "Low"
    },
    {
        id: "muscle_pain",
        name: "Muscle Pain / Body Ache",
        description: "Pain in the muscles, often due to overuse or viral infection.",
        symptoms: ["Soreness", "Stiffness", "Weakness"],
        otcCategory: "Analgesics, Muscle Rubs",
        consultDoctor: "If severe weakness or signs of infection.",
        homeCare: "Rest, massage, warm bath.",
        riskLevel: "Low"
    },
    {
        id: "allergy",
        name: "Allergic Reaction (Mild)",
        description: "Immune system reaction to a foreign substance.",
        symptoms: ["Sneezing", "Itching", "Rash", "Swelling"],
        otcCategory: "Antihistamines",
        consultDoctor: "If difficulty breathing (Anaphylaxis) - Emergency.",
        homeCare: "Identify and avoid trigger, cool compress.",
        riskLevel: "Low to High"
    },
    {
        id: "skin_rash",
        name: "Skin Rash",
        description: "Change in the texture or color of your skin.",
        symptoms: ["Redness", "Itching", "Bumps"],
        otcCategory: "Hydrocortisone Cream, Antihistamines",
        consultDoctor: "If rash spreads rapidly or is painful.",
        homeCare: "Keep area clean and dry, avoid scratching.",
        riskLevel: "Low"
    },
    {
        id: "acne",
        name: "Acne / Pimples",
        description: "Skin condition that occurs when hair follicles become plugged with oil and dead skin cells.",
        symptoms: ["Whiteheads", "Blackheads", "Pimples"],
        otcCategory: "Benzoyl Peroxide, Salicylic Acid",
        consultDoctor: "If severe or causing scarring.",
        homeCare: "Wash face gently, avoid touching face.",
        riskLevel: "Low"
    },
    {
        id: "toothache",
        name: "Toothache",
        description: "Pain in or around a tooth.",
        symptoms: ["Sharp pain", "Swelling", "Sensitivity"],
        otcCategory: "Analgesics, Oral Anesthetic Gel",
        consultDoctor: "Always consult a dentist for toothache.",
        homeCare: "Salt water rinse, cold compress.",
        riskLevel: "Medium"
    },
    {
        id: "ear_pain",
        name: "Ear Pain (Mild)",
        description: "Pain in the inner or outer ear.",
        symptoms: ["Dull or sharp pain", "Fullness in ear"],
        otcCategory: "Analgesics",
        consultDoctor: "If discharge, hearing loss, or high fever.",
        homeCare: "Warm compress, keep head elevated.",
        riskLevel: "Low to Medium"
    },
    {
        id: "eye_irritation",
        name: "Eye Irritation / Redness",
        description: "Redness or irritation in the eyes.",
        symptoms: ["Redness", "Itching", "Watery eyes"],
        otcCategory: "Artificial Tears",
        consultDoctor: "If vision changes or severe pain.",
        homeCare: "Cold compress, rest eyes, avoid screens.",
        riskLevel: "Low"
    },
    {
        id: "fatigue",
        name: "Fatigue / Weakness",
        description: "Feeling of constant tiredness or lack of energy.",
        symptoms: ["Tiredness", "Lack of motivation", "Muscle weakness"],
        otcCategory: "Multivitamins (if deficiency)",
        consultDoctor: "If unexplained or persistent.",
        homeCare: "Adequate sleep, balanced diet, hydration.",
        riskLevel: "Low to Medium"
    }
];

// DOM Elements
const homeView = document.getElementById('home-view');
const resultView = document.getElementById('result-view');
const conditionSelect = document.getElementById('condition-select');
const getRecBtn = document.getElementById('get-recommendation-btn');

// Result Elements
const conditionName = document.getElementById('condition-name');
const riskBadge = document.getElementById('risk-badge');
const conditionDesc = document.getElementById('condition-desc');
const symptomList = document.getElementById('symptom-list');
const otcText = document.getElementById('otc-text');
const homeCareText = document.getElementById('home-care-text');
const doctorText = document.getElementById('doctor-text');
const saveBtn = document.getElementById('save-btn');
const backBtn = document.getElementById('back-btn');

// History Elements
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// State
let currentCondition = null;

// Initialize
function init() {
    populateDropdown();
    loadHistory();
    setupEventListeners();
}

// Populate Dropdown
function populateDropdown() {
    medicalConditions.forEach(condition => {
        const option = document.createElement('option');
        option.value = condition.id;
        option.textContent = condition.name;
        conditionSelect.appendChild(option);
    });
}

// Event Listeners
function setupEventListeners() {
    // Primary Action: Get Recommendation
    getRecBtn.addEventListener('click', () => {
        const selectedId = conditionSelect.value;
        if (selectedId) {
            showCondition(selectedId);
        } else {
            // Shake animation or alert if nothing selected
            conditionSelect.focus();
            conditionSelect.style.borderColor = 'var(--danger)';
            setTimeout(() => conditionSelect.style.borderColor = 'var(--border)', 500);
        }
    });

    // Back Action
    backBtn.addEventListener('click', () => {
        showHome();
    });

    // Save Action
    saveBtn.addEventListener('click', () => {
        if (currentCondition) {
            addToHistory(currentCondition);
        }
    });

    // Clear History
    clearHistoryBtn.addEventListener('click', () => {
        localStorage.removeItem('medicalHistory');
        loadHistory();
    });
}

// Show Condition Details (Switch View)
function showCondition(id) {
    currentCondition = medicalConditions.find(c => c.id === id);
    if (!currentCondition) return;

    // Update UI Content
    conditionName.textContent = currentCondition.name;
    conditionDesc.textContent = currentCondition.description;

    // Risk Badge Logic
    riskBadge.textContent = `Risk: ${currentCondition.riskLevel}`;
    riskBadge.className = 'badge'; // Reset
    if (currentCondition.riskLevel.toLowerCase().includes('high')) {
        riskBadge.classList.add('high');
    } else if (currentCondition.riskLevel.toLowerCase().includes('medium')) {
        riskBadge.classList.add('medium');
    } else {
        riskBadge.classList.add('low');
    }

    // Symptoms List
    symptomList.innerHTML = '';
    currentCondition.symptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = symptom;
        symptomList.appendChild(li);
    });

    otcText.textContent = currentCondition.otcCategory;
    homeCareText.textContent = currentCondition.homeCare;
    doctorText.textContent = currentCondition.consultDoctor;

    // Switch Views
    homeView.classList.add('hidden');
    resultView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Home (Switch View)
function showHome() {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
    currentCondition = null;
    conditionSelect.value = ""; // Optional: clear selection
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// History Management
function addToHistory(condition) {
    let history = JSON.parse(localStorage.getItem('medicalHistory') || '[]');

    // Prevent duplicates at the top
    if (history.length > 0 && history[0].id === condition.id) {
        saveBtn.textContent = "Already Saved";
        setTimeout(() => saveBtn.textContent = "Save to History", 1500);
        return;
    }

    const newItem = {
        id: condition.id,
        name: condition.name,
        date: new Date().toLocaleDateString()
    };

    history.unshift(newItem);
    if (history.length > 8) history = history.slice(0, 8);

    localStorage.setItem('medicalHistory', JSON.stringify(history));
    loadHistory();

    // Visual feedback
    const originalText = saveBtn.textContent;
    saveBtn.textContent = "Saved!";
    saveBtn.disabled = true;
    setTimeout(() => {
        saveBtn.textContent = originalText;
        saveBtn.disabled = false;
    }, 1500);
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('medicalHistory') || '[]');
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No recent searches.</p>';
        clearHistoryBtn.style.display = 'none';
        return;
    }

    clearHistoryBtn.style.display = 'inline-block';

    history.forEach(item => {
        const pill = document.createElement('div');
        pill.className = 'history-pill';
        pill.textContent = item.name;
        pill.addEventListener('click', () => {
            conditionSelect.value = item.id;
            showCondition(item.id);
        });
        historyList.appendChild(pill);
    });
}

// Run
init();
