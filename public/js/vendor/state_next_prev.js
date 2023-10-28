//const state_next_prev = document.getElementById("state_next_prev")

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
    { fips: '15', state: 'HAWAII' },
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

//document.getElementById('tempForm').addEventListener('submit', function (event) {

//});

function getCurrentIndex(currentFips) {
    return states.findIndex(state => state.fips === currentFips);
}

function navigationLinks(currentFips) {
    const currentStateIndex = getCurrentIndex(currentFips);

    const prevState = currentStateIndex > 0 ? states[currentStateIndex - 1] : null;
    const nextState = currentStateIndex < states.length - 1 ? states[currentStateIndex + 1] : null;

    const previousButton = document.getElementById('prev');
    if (prevState) {
        prev.href = `http://localhost:8080/fips/${prevState.fips}`;
    } else {
        prev.style.display = 'none';
    }
    const nextButton = document.getElementById('next');
    if (nextState) {
        next.href = `http://localhost:8080/fips/${nextState.fips}`;
    } else {
        next.style.display = 'none';
    }

    window.onload = function() {
        const currentFips = window.location.href;
        navigationLinks(currentFips);
    }
}
/*
let i = 0;

function next() {
    if (i >= states.length - 1) {
        return false;
    }
    i++;
    //stateTag.setAttribute('src', states[i]);
}
function prev() {
    if (i <= 0) {
        return false;
    }
    i--;
    //stateTag.setAttribute('src', states[i]);
}


//let text = "";

//states.forEach((state) => {
    //text+=`<li><a href="/fips/${state.fips}">${state.state}</a></li>`
    //prev+=`<li><a href="/fips/${state[index+1].fips}">${state.state}</a></li>`
//})

/*
let currentIndex = 0;

function updateList() {
    state_next_prev.innerHTML = '';
    //const state = states[currentIndex];
}

function nextState() {
    if (states.fips < states.length - 1) {
        states.fips++;
        updateList();
    }
}

function prevState() {
    if (states.fips > 0) {
        states.fips--;
        updateList();
    }
}

const nextButton = document.getElementById("nextButton");
nextButton.textContent = "Next";
nextButton.addEventListener("click", nextState);

const prevButton = document.getElementById("prevButton");
prevButton.textContent = "Previous";
prevButton.addEventListener("click", prevState);

updateList();
*/
//state_next_prev.innerHTML += text;
