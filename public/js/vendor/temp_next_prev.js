const previousMaxButton = document.getElementById("prev_max")
const nextMaxButton = document.getElementById("next_max")
const previousMinButton = document.getElementById("prev_min")
const nextMinButton = document.getElementById("next_min")



const url = String(window.location.href);
let currentTemp1 = url.slice(url.length-5, url.length-3)
let currentTemp2 = url.slice(url.length-2)
console.log(currentTemp1, currentTemp2)

if (currentTemp2 >= 74) {
    nextMaxButton.style.visibility = 'hidden';
} else if (currentTemp1<= 34) {
    previousMinButton.style.visibility = 'hidden';
}

function updateTempRange(currentTemp1, currentTemp2) {
    // Update your data and UI here based on the stateIndex.
    // For example, you can update the chart or table.
    window.location.href = `/temp/${currentTemp1}/${currentTemp2}`;
  }

// Function to update data and UI
function updateDataAndUI() {
  updateTempRange(currentTemp1, currentTemp2);
}


// Add event listeners to the buttons
previousMinButton.addEventListener("click", () => {
  if (currentTemp1 > 34) {
    currentTemp1--;
    updateDataAndUI();
  }
});

nextMaxButton.addEventListener("click", () => {
  if (currentTemp2 < 74) {
    currentTemp2++;
    updateDataAndUI();
  }
});

previousMaxButton.addEventListener("click", () => {
  if (currentTemp2 >= 35) {
    currentTemp2--;
    updateDataAndUI();
  }
});

nextMinButton.addEventListener("click", () => {
  if (currentTemp1 <= 73) {
    currentTemp1++;
    updateDataAndUI();
  }
});