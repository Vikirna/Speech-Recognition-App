// Check if browser supports speech recognition
const startStopButton = document.getElementById('start-stop-btn');
const outputTextarea = document.getElementById('output');

let recognition;
let isRecognizing = false;

// Initialize Speech Recognition
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true; // Keep listening for speech input
  recognition.interimResults = true; // Display real-time results
  recognition.lang = 'en-US'; // Set language to English

  recognition.onstart = function() {
    isRecognizing = true;
    startStopButton.textContent = 'Stop Recognition';
  };

  recognition.onend = function() {
    isRecognizing = false;
    startStopButton.textContent = 'Start Recognition';
  };

  recognition.onresult = function(event) {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    outputTextarea.value = transcript;
  };
} else {
  alert("Your browser doesn't support speech recognition.");
}

// Start or stop speech recognition when button is clicked
startStopButton.addEventListener('click', function() {
  if (isRecognizing) {
    recognition.stop();
  } else {
    recognition.start();
  }
});
