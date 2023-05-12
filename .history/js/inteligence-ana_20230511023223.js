(function() {

    const speakBtn = document.querySelector('#speakbtn');
    const speechResults = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        const speechCommand = new SpeechRecognition();

        speechCommand.lang = 'en';

        speakBtn.addEventListener('click', function () {
            try {
                speechCommand.start();
                speechResults.innerHTML = "Ouvindo";
            } catch (erro) {
                alert('Houve um erro' + erro.message);
            }
        }, false);
    }
})();