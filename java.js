// Get a reference to the button and the projects section
const toggleButton = document.getElementById('toggleProjects');
const projectsSection = document.getElementById('projects');

// Set an initial flag to track the visibility state
let projectsVisible = false;

// Function to toggle the visibility of the projects section
function toggleProjects() {
    projectsVisible = !projectsVisible;
    projectsSection.style.display = projectsVisible ? 'block' : 'none';
    toggleButton.textContent = projectsVisible ? 'Hide Projects' : 'Show Projects';
}

// Add a click event listener to the button
toggleButton.addEventListener('click', toggleProjects);

// Initially hide the projects section
projectsSection.style.display = 'none';

// Get a reference to the timer div
const timerDiv = document.getElementById('timer');

// Function to update the timer
function updateTimer() {
    // Check if the 'visitTime' cookie exists
    const visitTime = parseInt(getCookie('visitTime')) || 0;

    // Calculate the time spent on the page in seconds
    const now = new Date().getTime();
    const timeOnPage = Math.floor((now - visitTime) / 1000);

    // Display the time on the page
    timerDiv.textContent = `And if you were wondering you have been on this page for ${timeOnPage} seconds`;

    // Store the current time as the 'visitTime' cookie
    document.cookie = `visitTime=${now}`;
}

// Function to get the value of a cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Call the function to initially set the timer
updateTimer();
