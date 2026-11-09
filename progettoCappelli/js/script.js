let numeroSegreto;
let tentativiRimasti;
let numeriInseriti = []; 

function mostraIstruzioni() {
    let elemento = document.getElementById("rimuovi");
    let freccia = document.getElementById("icona-freccia");
    elemento.classList.toggle("d-none");
    freccia.classList.toggle("bi-arrow-right-circle");
    freccia.classList.toggle("bi-arrow-down-circle");
}

function start() {
    let gioco = document.getElementById("sezione-gioco");
    gioco.classList.remove("d-none");
    numeroSegreto = Math.floor(Math.random() * 101);
    tentativiRimasti = 7;
    numeriInseriti = [];
    document.getElementById("tentativi").innerHTML = tentativiRimasti;
    document.getElementById("suggerimento").innerHTML = "Inizia a giocare!";
    document.getElementById("numeri").innerHTML = "-";
    document.getElementById("input").value = "";
}

function check() {
    let input = parseInt(document.getElementById("input").value);
    let tentativi = document.getElementById("tentativi");
    let suggerimento = document.getElementById("suggerimento");
    let numeri = document.getElementById("numeri");
    if (isNaN(input)) {
        return;
    }
    tentativiRimasti--;
    numeriInseriti.push(input);
    tentativi.innerHTML = tentativiRimasti;
    numeri.innerHTML = numeriInseriti.join(" - ");
    if (input == numeroSegreto) {
        suggerimento.innerHTML = "Hai vinto! Il numero era " + numeroSegreto;
        suggerimento.className = "fs-5 text-success fw-bold";
    } else if (tentativiRimasti == 0) {
        suggerimento.innerHTML = "Hai perso! Il numero era " + numeroSegreto;
        suggerimento.className = "fs-5 text-danger fw-bold";
    } else if (input < numeroSegreto) {
        suggerimento.innerHTML = "Il numero misterioso è più ALTO";
        suggerimento.className = "fs-5 text-primary";
    } else {
        suggerimento.innerHTML = "Il numero misterioso è più BASSO";
        suggerimento.className = "fs-5 text-warning";
    }
    document.getElementById("input").value = "";
}