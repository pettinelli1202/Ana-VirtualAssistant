(function config() {


    const speakBtn = document.querySelector('#speakbtn');
    const speechResults = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = SpeechRecognition||webkitSpeechRecognition;
        const speechCommand = new SpeechRecognition();

        speechCommand.lang = 'pt-BR';

        speakBtn.addEventListener('click', function())
    }
})();