// Handle form submission and send Turnstile response token to the server
document.getElementById('turnstile-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission so we can process it first

    // Get the Turnstile response token
    const token = grecaptcha.getResponse();

    // Ensure that the token is not empty (i.e., the user hasn't solved the Turnstile)
    if (token) {
        // Create a new FormData object to send the token with other form data
        const formData = new FormData(this);
        formData.append('turnstile_token', token);  // Add the Turnstile token to the form data

        // Send the data to the server using fetch
        fetch('/verify-turnstile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Verification passed!');
                    // Optionally redirect or take further action
                    window.location.href = '/thank-you';  // Example: Redirect to a thank you page
                } else {
                    alert('Turnstile verification failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during verification.');
            });
    } else {
        alert('Please complete the CAPTCHA');
    }
});
