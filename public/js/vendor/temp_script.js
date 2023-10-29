document.getElementById('tempForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user input
    const temp1 = parseInt(document.getElementById('temp1').value)
    const temp2 = parseInt(document.getElementById('temp2').value)

    console.log(temp1)
    console.log(temp2)

    if (!Number.isInteger(temp1) || !Number.isInteger(temp2)) {
        console.log(temp1)
        console.log(temp2)
        alert("Temperature entered must be a whole number.")
    } else if (temp1 > temp2) {
        alert("Min temperature must be greater than or equal too the max temperature.")

    } else {
        const url = `/temp/${temp1}/${temp2}`;

        // Perform a GET request using fetch
        window.location.href = url;
    }
})