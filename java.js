document.addEventListener('DOMContentLoaded', function() {

    // Get a reference to the button and the projects section
    const toggleButton = document.getElementById('toggleProjects');
    const projectsSection = document.getElementById('projects');

    // Check if the elements exist before proceeding
    if (toggleButton && projectsSection) {

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
    }

    // Get a reference to the timer div
    const timerDiv = document.getElementById('timer');

    // Initialize the timer value
    let timeOnPage = 0;
    let save = false; // Initialize 'save' as false

    // Function to update the timer
    function updateTimer() {
        // Update the 'timeOnPage' variable
        timeOnPage++;

        // Display the time on the page
        timerDiv.textContent = `You have been on this page for ${timeOnPage} seconds`;

        // Save the updated timer value as a cookie if 'save' is true
        if (save) {
            document.cookie = `timeOnPage=${timeOnPage}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
        }
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);


    // Cookie Consent Banner
    const cookieConsentBanner = document.getElementById('cookieConsentBanner');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    const rejectCookiesButton = document.getElementById('rejectCookies');

    // Check if the user has previously accepted or rejected cookies
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');

    if (!hasAcceptedCookies) {
        // Show the cookie consent banner if the user hasn't made a choice
        cookieConsentBanner.style.display = 'block';

        // Handle click event for "Accept" button
        acceptCookiesButton.addEventListener('click', function() {
            // Set 'save' to true before starting the timer
            save = true;

            // Set a flag in local storage to remember the user's choice
            localStorage.setItem('hasAcceptedCookies', 'true');

            // Hide the banner
            cookieConsentBanner.style.display = 'none';

        });

        // Handle click event for "Reject" button
        rejectCookiesButton.addEventListener('click', function() {
            // Set a flag in local storage to remember the user's choice
            localStorage.setItem('hasAcceptedCookies', 'false');

            // Hide the banner
            cookieConsentBanner.style.display = 'none';
        });
    } else {
        // If the user has previously accepted cookies, set 'save' to true
        save = true;
    }
    // Function to get the value of a cookie by name
    function getCookie(cookieName) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === cookieName) {
                return value;
            }
        }
        return null;
    }
    const cookieValue = parseInt(getCookie('timeOnPage'));
    if (!isNaN(cookieValue)) {
        timeOnPage = timeOnPage + cookieValue;


    }

    // Call the function to initially set the timer
    updateTimer();
});