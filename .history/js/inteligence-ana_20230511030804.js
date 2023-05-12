(function () {

    const speakBtn = document.querySelector('#speakBtn');
    var resultSpeaker = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultSpeaker.innerHTML = "Ouvindo";
            } catch (erro) {
                alert('Ocorreu um erro' + erro.message);
            }
        }, false);
    }
})();
