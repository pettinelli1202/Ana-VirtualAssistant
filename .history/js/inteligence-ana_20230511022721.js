(function config_ana() {


    const speakBtn = document.querySelector('#speakbtn');
    const speechResults = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        const speechCommand = new SpeechRecognition();

        speechCommand.lang = 'pt-BR';

        speakBtn.addEventListener('click', function execute_ana() {
            try {
                speechResults.innerHTML = "Ouvindo";
            } catch (erro) {
                alert(erro.message);
            }
        }, false);

})(execute_ana);