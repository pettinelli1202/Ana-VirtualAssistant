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
            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);
            resultSpeaker.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#33cc99';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#000000';
                    break;
            }

        }, false);
        myRecognition.addEventListener('Ocorreu um erro', function (evt) {
            resultSpeaker.innerHTML = 'Desculpe, pode repetir?';
        }, false);
    } else {
        resultSpeaker.innerHTML = 'Seu navegador não suporta'
    }
})();