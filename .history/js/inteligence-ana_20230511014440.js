(function (){


    const speakBtn = document.querySelector('#speakbtn');
    const result = document.querySelector('#resultSpeak')

    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        alert('sim')
    }
});