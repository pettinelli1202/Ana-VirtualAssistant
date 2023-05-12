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
         
                    document.body.style.color= 'light';
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
