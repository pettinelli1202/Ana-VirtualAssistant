(function (){


    const speakBtn = document.querySelector('#speakbtn');
    const speechResults = document.querySelector('#resultSpeak')

    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        alert('sim')
    }
});