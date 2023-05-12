(function() {

    var speakBtn = document.querySelector('#speakBtn');
    var speechResults = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = SpeechRecognition || SpeechRecognition;
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