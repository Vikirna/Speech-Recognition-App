**Speech Recognition App**
A sleek, browser-based speech recognition app that converts your voice to text in real time — no backend required.

**Features**
- Real-time speech-to-text using the Web Speech API
- Continuous listening mode
- Interim results displayed as you speak
- Dark-themed, minimal UI
- No dependencies or installation needed

**Getting Started**
**Prerequisites**
- A modern browser that supports the Web Speech API (Chrome recommended)
**Run Locally**
**1. Clone the repository:**
bash   git clone https://github.com/Vikirna/prp-project.git
   cd prp-project

Open index1.html directly in your browser — no server needed.

**Project Structure**
prp-project/
├── index1.html     # Main HTML page
├── script1.js      # Speech recognition logic
└── style1.css      # App styling

**How It Works**
Click Start Recognition to begin listening.
Speak into your microphone — your words appear in the text area in real time.
Click Stop Recognition to stop.

The app uses the browser's built-in webkitSpeechRecognition API with:

continuous: true — keeps listening until manually stopped
interimResults: true — shows live partial results
lang: 'en-US' — English language recognition


**Browser Compatibility**
BrowserSupportedChrome✅ YesEdge✅ YesFirefox❌ NoSafari⚠️ Partial

Firefox does not currently support the Web Speech API. Chrome is recommended for the best experience.


**Preview**
Dark-themed UI with a glowing teal accent (#64ffda), centered layout, and a responsive textarea for output.


📄 License
This project is open source and available under the MIT License.
