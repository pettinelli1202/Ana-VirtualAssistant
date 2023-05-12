(function () {

    const falarBtn = document.querySelector('#falarBtn');
    const resultadoFala = document.querySelector('#resultadoFala')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        falarBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultadoFala.innerHTML = "Ouvindo...";
            } catch (erro) {
                alert('Ocorreu um erro: ' erro.message);
            }
        }, false);


        myRecognition.addEventListener('result', function (evt) {
            const resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);
            resultadoFala.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'tema claro':
                    document.body.style.background = '#4a00e0';
                    break;
                case 'tema dark':
                    document.body.style.background = '#000000';
                    break;
            }
        }, false);

        myRecognition.addEventListener('Ocorreu um erro! ', function (evt) {
            resultadoFala.innerHTML = 'Desculpe, pode repetir?';
        }, false);
    } else {
        resultadoFala.innerHTML = 'Seu navegador não suporta essa tecnologia'
    }
})();
