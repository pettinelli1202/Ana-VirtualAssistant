(function () {

    const speakBtn = document.querySelector('#speakBtn');
    const resultSpeaker = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        const myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultSpeaker.innerHTML = "Ouvindo"
            } catch (erro) {
                alert('Ocorreu um erro' + erro.message);
            }
        }, false);
    }
})();
