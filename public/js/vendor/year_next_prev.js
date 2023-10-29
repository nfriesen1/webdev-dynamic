const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const url = String(window.location.href);
let currentYear = url.slice(url.length - 4);
console.log(currentYear)

if (currentYear == 2019) {
    nextButton.style.visibility = 'hidden';
} else if (currentYear == 1895) {
    previousButton.style.visibility = 'hidden';
}

function updateYearData(currentYear) {
    // Update your data and UI here based on the stateIndex.
    // For example, you can update the chart or table.
    if (currentYear >= 1895 && currentYear < 2020) {
        window.location.href = `/year/${currentYear}`;
      }
  }

// Function to update data and UI
function updateDataAndUI() {
  updateYearData(currentYear);
}


// Add event listeners to the buttons
previousButton.addEventListener("click", () => {
  if (currentYear > 1895) {
    currentYear--;
    updateDataAndUI();
  }
});

nextButton.addEventListener("click", () => {
  if (currentYear < 2019) {
    currentYear++;
    updateDataAndUI();
  }
});