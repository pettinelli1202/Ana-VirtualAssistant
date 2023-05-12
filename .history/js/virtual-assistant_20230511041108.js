(function () {

    const falarBtn = document.querySelector('#falarBtn');
    const resultfalarer = document.querySelector('#resultfalar')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        falarBtn.addEventListener('click', function () {
            try {
                myRecognition.start();
                resultfalarer.innerHTML = "Ouvindo";
            } catch (erro) {
                alert('Ocorreu um erro: ' + erro.message);
            }
        }, false);


        myRecognition.addEventListener('result', function (evt) {
            var resultfalar = evt.results[0][0].transcript;

            console.log(resultfalar);
            resultfalarer.innerHTML = resultfalar;

            switch (resultfalar.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#33cc99';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#000000';
                    break;
            }

        }, false);
        myRecognition.addEventListener('Ocorreu um erro', function (evt) {
            resultfalarer.innerHTML = 'Desculpe, pode repetir?';
        }, false);
    } else {
        resultfalarer.innerHTML = 'Seu navegador não suporta'
    }
})();
