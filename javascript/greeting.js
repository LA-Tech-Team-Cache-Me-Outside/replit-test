// Function to load and display the greeting based on IP location
function loadLocationGreeting() {
    // Get Request for IPAPI service to get country info using IP address
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        // Extract country data + finds html element (id=greeting)
        .then(data => {
            const country = data.country_name;
            document.getElementById('greeting').textContent = `Hello from ${country}!`;
        })
        // Error if cannot get country data
        .catch(error => {
            console.error('Error fetching location:', error);
            document.getElementById('greeting').textContent = `Hello, welcome!`;
        });
}

// Initialize greeting when DOM is loaded
document.addEventListener('DOMContentLoaded', loadLocationGreeting); 