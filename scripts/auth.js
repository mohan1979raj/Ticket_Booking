function login(event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic (e.g., check credentials)
    // For simplicity, you can add a basic check here
    if (username != '' && password !== '') {
        alert('Login successful! Redirecting to the homhhhe page.');
        console.log('hiii')
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// The navigateTo function remains the same as before
function navigateTo(page) {
    window.location.href = page;
}
