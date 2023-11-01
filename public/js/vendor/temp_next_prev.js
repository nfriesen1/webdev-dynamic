const previousMaxButton = document.getElementById("prev_max")
const nextMaxButton = document.getElementById("next_max")
const previousMinButton = document.getElementById("prev_min")
const nextMinButton = document.getElementById("next_min")

const previousMaxButtonSmall = document.getElementById("prev_max_small")
const nextMaxButtonSmall = document.getElementById("next_max_small")
const previousMinButtonSmall = document.getElementById("prev_min_small")
const nextMinButtonSmall = document.getElementById("next_min_small")



const url = String(window.location.href);
var parts = url.split("/");
console.log(parts)
let currentTemp1 = parts[4]
let currentTemp2 = parts[5]
console.log(currentTemp1, currentTemp2)

if (currentTemp2 >= 74) {
  console.log(currentTemp2)
  nextMaxButtonSmall.style.visibility = 'hidden';

} else if(currentTemp1<= 34) {
  previousMinButtonSmall.style.visibility = 'hidden'; 
}
if (currentTemp2 >= 74) {
    nextMaxButton.style.visibility = 'hidden';
} else if (currentTemp1<= 34) {
    previousMinButton.style.visibility = 'hidden'; 
}

if (currentTemp1 == currentTemp2) {
  previousMaxButton.style.visibility = 'hidden'
  nextMinButton.style.visibility = 'hidden'
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
  if (currentTemp1 > 34 && currentTemp2 >= currentTemp1) {
    currentTemp1--;
    updateDataAndUI();
  }
});

nextMaxButton.addEventListener("click", () => {
  if (currentTemp2 < 74 && currentTemp1 < currentTemp2 + 1) {
    currentTemp2++;
    updateDataAndUI();
  }
});

previousMaxButton.addEventListener("click", () => {
  if (currentTemp2 >= 35 && currentTemp2 >= currentTemp1) {
    currentTemp2--;
    updateDataAndUI();
  }
});

nextMinButton.addEventListener("click", () => {
  if (currentTemp1 <= 73 && currentTemp1  < currentTemp2) {
    currentTemp1++;
    updateDataAndUI();
  }
});

previousMinButtonSmall.addEventListener("click", () => {
  if (currentTemp1 > 34 && currentTemp2 >= currentTemp1) {
    currentTemp1--;
    updateDataAndUI();
  }
});

nextMaxButtonSmall.addEventListener("click", () => {
  if (currentTemp2 < 74 && currentTemp1 < currentTemp2 + 1) {
    currentTemp2++;
    updateDataAndUI();
  }
});

previousMaxButtonSmall.addEventListener("click", () => {
  if (currentTemp2 >= 35 && currentTemp2 >= currentTemp1) {
    currentTemp2--;
    updateDataAndUI();
  }
});

nextMinButtonSmall.addEventListener("click", () => {
  if (currentTemp1 <= 73 && currentTemp1  < currentTemp2) {
    currentTemp1++;
    updateDataAndUI();
  }
});