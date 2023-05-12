(function () {

    const speakBtn = document.querySelector('#speakBtn');
    const resultSpeaker = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultSpeaker.innerHTML = "Ouvindo";
            } catch (erro) {
                alert('Ocorreu um erro: ' + erro.message);
            }
        }, false);
        myRecognition.addEventListener('result', function (evt) {
            var commandSpeak = evt.results[0][0].transcript;
            console.log(commandSpeak);
            resultSpeaker.innerHTML = commandSpeak;
            switch(commandSpeak.toLowerCase()){
                case 'Tema claro':
                    document.body.style.backgroundColor = '#wheat';
                    break;
                case 'Tema dark':
                document.body.style.backgroundColor = ''    
                break;
            }
        }, false);
        myRecognition.addEventListener('Ocorreu um erro', function (evt) {
            resultSpeaker.innerHTML = 'Desculpe, pode repetir?'
        }, false);
    } else {
        resultSpeaker.innerHTML = 'Seu navegador não suporta'
    }
})();
