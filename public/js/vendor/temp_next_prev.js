const previousButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

const url = String(window.location.href);
let currentTemp1 = url.slice(url.length-5, url.length-3)
let currentTemp2 = url.slice(url.length-2)
console.log(currentTemp1, currentTemp2)

if (currentTemp2 == 74) {
    nextButton.style.visibility = 'hidden';
} else if (currentTemp1== 34) {
    previousButton.style.visibility = 'hidden';
}

function updateTempRange(currentTemp1, currentTemp2) {
    // Update your data and UI here based on the stateIndex.
    // For example, you can update the chart or table.
    if (currentTemp1 >= 34 && currentTemp2 < 75) {
        window.location.href = `/temp/${currentTemp1}/${currentTemp2}`;
      }
  }

// Function to update data and UI
function updateDataAndUI() {
  updateTempRange(currentTemp1, currentTemp2);
}


// Add event listeners to the buttons
previousButton.addEventListener("click", () => {
  if (currentTemp1 > 34) {
    currentTemp1--;
    currentTemp2--;
    updateDataAndUI();
  }
});

nextButton.addEventListener("click", () => {
  if (currentTemp2 < 74) {
    currentTemp2++;
    currentTemp1++;
    updateDataAndUI();
  }
});