const modal = document.getElementById("myModal");

const openModal = document.getElementById("open-modal");

const spanCloseButton = document.getElementsByClassName("close")[0];

openModal.onclick=function(){
    modal.style.display = "block";
}

spanCloseButton.onclick=function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal)
}