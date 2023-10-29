const states = [
    { fips: '01', state: 'ALABAMA' },
    { fips: '04', state: 'ARIZONA' },
    { fips: '05', state: 'ARKANSAS' },
    { fips: '06', state: 'CALIFORNIA' },
    { fips: '08', state: 'COLORADO' },
    { fips: '09', state: 'CONNECTICUT' },
    { fips: '10', state: 'DELAWARE' },
    { fips: '12', state: 'FLORIDA' },
    { fips: '13', state: 'GEORGIA' },
    { fips: '16', state: 'IDAHO' },
    { fips: '17', state: 'ILLINOIS' },
    { fips: '18', state: 'INDIANA' },
    { fips: '19', state: 'IOWA' },
    { fips: '20', state: 'KANSAS' },
    { fips: '21', state: 'KENTUCKY' },
    { fips: '22', state: 'LOUISIANA' },
    { fips: '23', state: 'MAINE' },
    { fips: '24', state: 'MARYLAND' },
    { fips: '25', state: 'MASSACHUSETTS' },
    { fips: '26', state: 'MICHIGAN' },
    { fips: '27', state: 'MINNESOTA' },
    { fips: '28', state: 'MISSISSIPPI' },
    { fips: '29', state: 'MISSOURI' },
    { fips: '30', state: 'MONTANA' },
    { fips: '31', state: 'NEBRASKA' },
    { fips: '32', state: 'NEVADA' },
    { fips: '33', state: 'NEW HAMPSHIRE' },
    { fips: '34', state: 'NEW JERSEY' },
    { fips: '35', state: 'NEW MEXICO' },
    { fips: '36', state: 'NEW YORK' },
    { fips: '37', state: 'NORTH CAROLINA' },
    { fips: '38', state: 'NORTH DAKOTA' },
    { fips: '39', state: 'OHIO' },
    { fips: '40', state: 'OKLAHOMA' },
    { fips: '41', state: 'OREGON' },
    { fips: '42', state: 'PENNSYLVANIA' },
    { fips: '44', state: 'RHODE ISLAND' },
    { fips: '45', state: 'SOUTH CAROLINA' },
    { fips: '46', state: 'SOUTH DAKOTA' },
    { fips: '47', state: 'TENNESSEE' },
    { fips: '48', state: 'TEXAS' },
    { fips: '49', state: 'UTAH' },
    { fips: '50', state: 'VERMONT' },
    { fips: '51', state: 'VIRGINIA' },
    { fips: '53', state: 'WASHINGTON' },
    { fips: '54', state: 'WEST VIRGINIA' },
    { fips: '55', state: 'WISCONSIN' },
    { fips: '56', state: 'WYOMING' }
];

function getCurrentIndex(currentFips) {
    return states.findIndex((state) => state.fips === currentFips);
  }

  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  function updateStateData(stateIndex) {
    // Update your data and UI here based on the stateIndex.
    // For example, you can update the chart or table.
    if (stateIndex >= 0 && stateIndex < states.length) {
        const newStateFips = states[stateIndex].fips;
        window.location.href = `/fips/${newStateFips}`;
      }
  }
  
    const url = String(window.location.href);
    const currentFips = url.slice(url.length - 2);
    let currentStateIndex = getCurrentIndex(currentFips);
    if (currentStateIndex == states.length-1) {
        nextButton.style.visibility = 'hidden';
    } else if (currentStateIndex == 0) {
        previousButton.style.visibility = 'hidden';
    }
  
    // Function to update data and UI
    function updateDataAndUI() {
      updateStateData(currentStateIndex);
    }
  
  
    // Add event listeners to the buttons
    previousButton.addEventListener("click", () => {
      if (currentStateIndex > 0) {
        currentStateIndex--;
        updateDataAndUI();
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentStateIndex < states.length - 1) {
        currentStateIndex++;
        updateDataAndUI();
      }
    });