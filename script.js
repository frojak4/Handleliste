let handleKurv = []
currentInput = document.querySelector(".input");
let handleListe = document.querySelector(".skrift");
let listeNummer = 0;

function addToCart() {
    handleKurv.push(currentInput.value);
    currentInput.placeholder = "Skriv Her";
    currentInput.value = "";
}

function print() {
    
    for (let i = 0; i < handleKurv.length; i++) {
        listeNummer ++;
        handleListe.innerHTML += listeNummer + ". " + handleKurv[i] + " ";
    }
    handleKurv = [];
}
