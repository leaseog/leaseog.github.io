// Get the timer element
const timerElement = document.getElementById('timer');

// Initialize variables
let secondsElapsed = 0;
const maxSeconds = 20 * 60; // 20 minutes in seconds

// Function to format time (mm:ss)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsPart = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
}

// Function to update the timer
function updateTimer() {
  if (secondsElapsed < maxSeconds) {
    secondsElapsed++;
    timerElement.textContent = `${formatTime(secondsElapsed)}`;
  } else {
    clearInterval(timerInterval); // Stop the timer after 20 minutes
    timerElement.textContent = '20:00 (Time is up!)';
  }
}

// Start the timer and update every second
const timerInterval = setInterval(updateTimer, 1000);

// alert('20 minutes have passed!');
