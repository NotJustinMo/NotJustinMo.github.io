// Get the hamburger icon, side panel, and buttons
const hamburger = document.getElementById('hamburger');
const sidePanel = document.getElementById('sidePanel');
const buttons = document.querySelectorAll('.panel-button');
const contentSections = document.querySelectorAll('.content');

// Toggle side panel visibility
hamburger.addEventListener('click', () => {
    const panelWidth = sidePanel.style.left === '0px' ? '-250px' : '0px';
    sidePanel.style.left = panelWidth;
});

// Add click event listeners to navigation buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected content section
        const selectedContent = document.getElementById(target);
        selectedContent.style.display = 'block';
    });
});









const data = {
    
        Conditions: [
            'Activities of Daily Living', 'AFib/irreg rhythm', 'AFib/irreg rhythm Untreated', 'Amputation (diabetic)',
            'Amputation (non-diabetic)', 'Angina off meds (12-24 mo)', 'Angina off meds (24+ mo)', 'Angina on meds (12-24 mo)',
            'Angina on meds (24+ mo)', 'Bi-Polar', 'Blood Clot (12-24 mo)', 'Blood Clot (24+ mo)', 'Cancer - Metastatic',
            'Cancer - Multiple Types/Times', 'Cancer - Recurring', 'Cancer (2+ yrs)', 'Cancer (3+ yrs)', 'Cancer (4+ yrs)',
            'Cancer (5+ yrs)', 'Cerebral Palsy', 'CHF', 'COPD', 'COPD - Tobacco User', 'COPD (not treated 24 mo)', 'Crohns Disease',
            'Defibrillator (12-24 mo)', 'Defibrillator (24+ mo)', 'Diabetic No Insulin Complications', 'Diabetic Insulin Complications',
            'Diabetic Hx of Heart/Stroke', 'Epilepsy / Seizures', 'Heart Attack (12-24 mo)', 'Heart Attack (24-36 mo)',
            'Heart Attack (36+ mo)', 'Hep C Treated (12-24 mo)', 'Hep C Treated (24+ mo)', 'Hep C Treated (36+ mo)', 'Hep C Untreated',
            'Insulin', 'Kidney Disease Dgn <12mo', 'Kidney Disease Dgn >12mo', 'Kidney Disease Untreated', 'Liver Disease',
            'Liver Disease Untreated', 'Lupus (being treated)', 'Lupus (not being treated)', 'Mental Illness (Anxiety, Depression)',
            'MS (being treated)', 'MS (not being treated)', 'Oxygen (for sleep apnea)', 'Oxygen (no longer using)', 'Pacemaker (12-24 mo)',
            'Pacemaker (24+ mo)', 'Pain - Narcotics/Opioids (over 6mo)', 'Pain - Narcotics/Opioids (under 6mo)', 'Parkinsons',
            'Schizophrenia', 'Seizures', 'Stent (12-24 mo)', 'Stent (24-36 mo)', 'Stent (36+ mo)', 'Stroke (12-24 mo)',
            'Stroke (24-36 mo)', 'Stroke (36+ mo)', 'TIA - (0-12 mo) No New Thinners', 'Ulcerative Colitis', 'Wheel Chair Confined',
            'Wheel Chair Use'
        ],
        MOO: ['Denied', 'Modified', 'Modified', 'Denied', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Denied', 'Preferred', 'Denied', 'Modified', 'Modified', 'Pref, meds ok', 'Pref, meds ok', 'Preferred', 'Denied', 'Modified', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', '50+ Pref', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', '4+ yrs Pref', 'Modified', 'Modified', '4+ yrs Pref', 'Preferred', 'Modified', 'Modified', 'Modified', 'Preferred', '6mo) Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Preferred', 'Modified', 'Modified'],
        Americo: ['Modified', 'Preferred', 'Preferred', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Modified', '6+ mo Pref', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Modified', '6+ mo Pref'],
        LBL: ['Denied', 'Standard', 'Standard', 'Denied', 'Preferred', 'Modified', 'Preferred', 'Modified', 'Modified', 'Preferred', 'Modified', 'Preferred', 'Denied', 'Denied', 'Denied', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Denied', 'Standard', 'Modified', 'Standard', 'Preferred', 'Denied', 'Denied', 'Modified', 'Modified', 'Preferred', 'Standard', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Standard', 'Standard', 'Denied', 'Standard', 'Modified', 'Modified', 'Modified', 'Standard', 'Standard', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Modified', '1+ yrs Pref', 'Modified', 'Preferred', 'Modified', 'Modified', 'Standard', 'Denied', 'Standard', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Preferred', 'Preferred', 'Standard', 'Preferred', 'Modified', 'Modified'],
        Royal: ['Modified', 'Preferred', 'Preferred', 'Graded', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Standard', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Graded', 'Graded', 'Graded', 'Standard', 'Preferred', 'Modified', 'Standard', 'Modified', 'Standard', 'Preferred', 'Modified', 'Modified', 'Standard', 'Modified', 'Standard', 'Standard', 'Graded', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Modified', 'Graded', 'Graded', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Standard', 'Standard', 'Modified', 'Standard', 'Standard', 'Standard', 'Graded', 'Standard', 'Standard', 'Standard', 'Modified', 'Graded', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Graded', 'Preferred', 'Denied', 'Preferred'],
        TransAmerica: ['Denied', 'Preferred', 'Preferred', 'Denied', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Denied', 'Denied', 'Denied', 'Standard', 'Standard', 'Standard', 'Standard', 'Denied', 'Standard', '*Standard*', '*Standard*', '*Standard*', 'Preferred', 'Preferred', 'Preferred', 'Standard', 'Standard', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Standard', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', '*Standard*', '*Standard*', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', '*Standard*', '*Standard*', '*Standard*', '*Standard*', 'Preferred', 'Modified', 'Preferred'],
        AIG_SIWL: ['Denied', 'UW Guide', 'UW Guide', 'Denied', 'Preferred', 'UW Guide', 'UW Guide', 'UW Guide', 'UW Guide', 'Modified', 'Preferred', 'Preferred', 'Denied', 'UW Guide', 'UW Guide', 'UW Guide', 'UW Guide', 'UW Guide', 'Preferred', 'Preferred', 'Modified', 'Denied', 'Denied', 'Denied', 'Preferred', 'Modified', 'Preferred', 'Preferred', 'Modified', 'Denied', 'Preferred', 'UW Guide', 'UW Guide', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Modified', 'Preferred', 'Modified', 'Modified', 'Preferred', 'Preferred', 'Preferred', 'Modified', 'Modified', 'Preferred', 'UW Guide', 'Preferred', 'Preferred', 'Modified', 'Preferred', 'Preferred', 'UW Guide', 'Preferred', 'Denied', 'Preferred']
    
  };

  // Ranking of approval rates
  const rank = {
    Preferred: 1,
    Standard: 2,
    Graded: 3,
    Modified: 4,
    Denied: 5,
    'UW Guide': 6
  };

  const conditionsForm = document.getElementById("conditionsForm");

  // Loop through the conditions data and dynamically create checkboxes
  data.Conditions.forEach((condition, index) => {
    // Create a container for each checkbox and label
    const formItem = document.createElement("div");
    formItem.classList.add("form-item"); // Add the class for styling
  
    // Create the checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `condition-${index}`;
    checkbox.value = index;
  
    // Create the label for the checkbox
    const label = document.createElement("label");
    label.htmlFor = `condition-${index}`;
    label.textContent = condition;
  
    // Append the checkbox and label to the container
    formItem.appendChild(checkbox);
    formItem.appendChild(label);
  
    // Append the container to the form
    conditionsForm.appendChild(formItem);
  });
  





//  // Generate checkboxes
//  const conditionsForm = document.getElementById("conditionsForm");
//  data.Conditions.forEach((condition, index) => {
//    const checkbox = document.createElement("input");
//    checkbox.type = "checkbox";
//    checkbox.id = `condition-${index}`;
//    checkbox.value = index;

//    const label = document.createElement("label");
//    label.htmlFor = `condition-${index}`;
//    label.textContent = condition;

//    const br = document.createElement("br");

//    conditionsForm.appendChild(checkbox);
//    conditionsForm.appendChild(label);
//    conditionsForm.appendChild(br);
//  });



  // Submit event
  document.getElementById("submitBtn").addEventListener("click", () => {
    const selectedConditions = Array.from(
      document.querySelectorAll("#conditionsForm input[type='checkbox']:checked")
    ).map(checkbox => parseInt(checkbox.value));

    if (selectedConditions.length === 0) {
      alert("Please select at least one condition.");
      return;
    }

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    // Create a table for results
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Add headers
    const headers = ["Condition", "MOO", "Americo", "LBL", "Royal", "TransAmerica", "AIG_SIWL"];
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Final decision logic
    const finalDecision = {
      MOO: 1,
      Americo: 1,
      LBL: 1,
      Royal: 1,
      TransAmerica: 1,
      AIG_SIWL: 1
    };

    // Add selected conditions and their data
    selectedConditions.forEach(index => {
      const row = document.createElement("tr");

      // Add condition name
      const conditionCell = document.createElement("td");
      conditionCell.textContent = data.Conditions[index];
      row.appendChild(conditionCell);

      // Add carrier approval ratings
      ["MOO", "Americo", "LBL", "Royal", "TransAmerica", "AIG_SIWL"].forEach(carrier => {
        const cell = document.createElement("td");
        const rating = data[carrier][index];
        cell.textContent = rating;

        // Update final decision
        if (rank[rating] > finalDecision[carrier]) {
          finalDecision[carrier] = rank[rating];
        }

        row.appendChild(cell);
      });

      table.appendChild(row);
    });

    // Add final decision row
    const decisionRow = document.createElement("tr");
    const decisionLabel = document.createElement("td");
    decisionLabel.textContent = "Final Decision";
    decisionRow.appendChild(decisionLabel);

    ["MOO", "Americo", "LBL", "Royal", "TransAmerica", "AIG_SIWL"].forEach(carrier => {
      const cell = document.createElement("td");

      // Find the highest approval rate for the carrier
      const decision = Object.keys(rank).find(
        key => rank[key] === finalDecision[carrier]
      );

      cell.textContent = decision;
      decisionRow.appendChild(cell);
    });

    table.appendChild(decisionRow);

    // Append the table to the output div
    outputDiv.appendChild(table);
  });


  function updateBuildChart() {
    const selectedCompany = document.getElementById('companySelect').value;
    const logoImage = document.getElementById('logoImage');
    const chartImage = document.getElementById('chartImage');
    
    // Define the paths for each company's logo and build chart image
    const companyData = {
      Americo: {
        logo: 'images/cropped-Americologo_red_289-2.png',
        chart: 'images/Americo Build chart.png'
      },
      Omaha: {
        logo: 'images/MOO favicon.png',
        chart: 'images/Omaha Build chart.png'
      },
      LBIG: {
        logo: 'images/LBIG_favicon.png',
        chart: 'images/LBL Build Chart.png'
      },
      // Add more companies as needed
    };
  
    // Update the images based on the selected company
    if (selectedCompany) {
      logoImage.src = companyData[selectedCompany].logo;
      chartImage.src = companyData[selectedCompany].chart;
    } else {
      logoImage.src = '';
      chartImage.src = '';
    }
  }
  