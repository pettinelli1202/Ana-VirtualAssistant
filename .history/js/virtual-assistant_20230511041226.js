(function () {

    const speakBtn = document.querySelector('#speakBtn');
    const resultadoFala = document.querySelector('#resultSpeak')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultadoFala.innerHTML = "Ouvindo";
            } catch (erro) {
                alert('Ocorreu um erro: ' + erro.message);
            }
        }, false);


        myRecognition.addEventListener('result', function (evt) {
            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);
            resultadoFala.innerHTML = resultSpeak;

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
            resultadoFala.innerHTML = 'Desculpe, pode repetir?';
        }, false);
    } else {
        resultadoFala.innerHTML = 'Seu navegador não suporta'
    }
})();
