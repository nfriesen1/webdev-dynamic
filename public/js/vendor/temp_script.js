document.getElementById('tempForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user input
    const temp1 = document.getElementById('temp1').value;
    const temp2 = document.getElementById('temp2').value;

    // Construct the URL with path parameters
    const url = `/temp/${temp1}/${temp2}`;

    // Perform a GET request using fetch
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Handle the response data (e.g., update the webpage with the retrieved data)
            document.body.innerHTML = data;
        })
        .catch(error => {
            // Handle any errors (e.g., display an error message)
            console.error("Error:", error);
        });
});
