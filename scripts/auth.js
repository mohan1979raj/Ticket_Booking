function signup(event) {
    event.preventDefault();

    // Get input values
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Store user credentials in localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Account created successfully! You can now log in.');
    window.location.href = 'index.html';
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getNextDay() {
    const now = new Date();
    now.setDate(now.getDate() + 1);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


function login(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if input credentials match stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to the home page.');
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    // Clear user credentials from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Redirect to login page
    window.location.href = 'index.html';
}

function displayUserInfo() {
    // Retrieve and display the username in the app bar
    const userContainer = document.getElementById('user-info');
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        userContainer.textContent = `Logged in as: ${storedUsername}`;
    } else {
        userContainer.textContent = 'Not logged in';
    }
}
document.addEventListener('DOMContentLoaded', displayUserInfo);

// Assume you have a sample list of trains in JSON format
const trainData = [
    { name: 'Express 101', number: 'E101', from: 'district1', to: 'district2', date:getCurrentDate() , selected: false },
    { name: 'Superfast 202', number: 'SF202', from: 'district2', to: 'district1', date: getCurrentDate(), selected: false },
    { name: 'Local 303', number: 'L303', from: 'district1', to: 'district3', date: getCurrentDate(), selected: false },
    { name: 'Express 101', number: 'E101', from: 'district2', to: 'district1', date: getCurrentDate(), selected: false },
    { name: 'Superfast 202', number: 'SF202', from: 'district2', to: 'district1', date: getCurrentDate(), selected: false },
    { name: 'Intercity 322', number: 'L303', from: 'district1', to: 'district3', date: getCurrentDate(), selected: false },
    // ... Add more trains as needed
];

function filterTrains() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Mock filtering based on the given data
    const filteredTrains = trainData.filter(train => {
        // Assume train data includes 'from', 'to', and 'date' properties
        return train.from === from && train.to === to && train.date === date && !train.selected;
    });

    displayTrainList(filteredTrains);

    // Update the "Book Ticket" button state after filtering trains
    updateBookTicketButtonState();
}
function displayTrainList(trains) {
    const trainListContainer = document.getElementById('train-list');

    if (trains.length > 0) {
        trainListContainer.innerHTML = '<h3>Available Trains:</h3>';

        trains.forEach((train, index) => {
            const trainElement = document.createElement('div');
            trainElement.classList.add('train-item');
            trainElement.innerHTML = `
                <p>${train.number} - ${train.name}</p>
                <button onclick="selectTrain(${index})" ${train.selected ? 'disabled' : ''}>Select</button>
            `;
            trainListContainer.appendChild(trainElement);
        });

        // Show the passenger details form
        document.getElementById('passenger-form').style.display = 'block';
    } else {
        trainListContainer.innerHTML = '<p>No trains available for the selected route and date.</p>';
        // Hide the passenger details form
        document.getElementById('passenger-form').style.display = 'none';
    }
}

function selectTrain(index) {
    const selectedTrain = trainData[index];

    // Do additional logic if needed based on the selected train

    // Update the selected property to true
    selectedTrain.selected = true;

    // Update the button style to indicate it is disabled
    const button = document.querySelectorAll('.train-item button')[index];
    button.disabled = true;
    button.classList.add('disabled');
}

function showPassengerForm(trainName, trainNumber) {
    // You can do additional logic here based on the selected train
    alert(`Selected train: ${trainName} (${trainNumber})`);

    // You might want to fill in some hidden fields for the selected train

    // Example:
    // document.getElementById('selectedTrainName').value = trainName;
    // document.getElementById('selectedTrainNumber').value = trainNumber;
}

function bookTicket() {
    // Perform booking logic here based on selected train and passenger details
    alert('Ticket booked successfully!');
    // Redirect or perform other actions as needed
}

// ... (your existing code) ...

function selectTrain(index) {
    const selectedTrain = trainData[index];

    // Do additional logic if needed based on the selected train

    // Update the selected property to true
    selectedTrain.selected = true;

    // Update the button style to indicate it is disabled
    const button = document.querySelectorAll('.train-item button')[index];
    button.disabled = true;
    button.classList.add('disabled');

    // Enable the "Book Ticket" button if a train is selected and passenger details are filled
    updateBookTicketButtonState();
}
function updateBookTicketButtonState() {
    const passengerName = document.getElementById('passenger-name').value.trim();
    const passengerAge = document.getElementById('passenger-age').value.trim();
    const selectedTrain = trainData.find(train => train.selected);

    const bookTicketButton = document.getElementById('book-ticket-btn');
    bookTicketButton.disabled = !(passengerName && passengerAge && selectedTrain);
}
function showPassengerForm(trainName, trainNumber) {
    // You can do additional logic here based on the selected train
    alert(`Selected train: ${trainName} (${trainNumber})`);

    // You might want to fill in some hidden fields for the selected train

    // Example:
    // document.getElementById('selectedTrainName').value = trainName;
    // document.getElementById('selectedTrainNumber').value = trainNumber;

    // Enable the "Book Ticket" button if passenger details are filled
    updateBookTicketButtonState();
}

// ... (your existing code) ...

// ... (your existing code) ...

function generateRandomBookingId() {
    // Generate a random booking ID (you can customize this logic)
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}

function bookTicket() {
    // Get the selected train and passenger details
    const selectedTrain = trainData.find(train => train.selected);
    const passengerName = document.getElementById('passenger-name').value.trim();
    const passengerAge = document.getElementById('passenger-age').value.trim();

    // Generate a random booking ID
    const bookingId = generateRandomBookingId();

    // Store ticket details in localStorage
    const ticketDetails = {
        bookingId,
        trainName: selectedTrain.name,
        trainNumber: selectedTrain.number,
        from: selectedTrain.from,
        to: selectedTrain.to,
        date: selectedTrain.date,
        passengerName,
        passengerAge,
    };
    localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));

    // Redirect to the ticket.html page
    window.location.href = 'ticket.html';
}

// ... (your existing code) ...


// ... (your existing code) ...


// Attach event listeners to update the "Book Ticket" button state when passenger details change

document.getElementById('passenger-name').addEventListener('input', updateBookTicketButtonState);
document.getElementById('passenger-age').addEventListener('input', updateBookTicketButtonState);



// ... (your existing code) ...
