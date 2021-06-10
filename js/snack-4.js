// Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var word = prompt("inserisci una parola");
while (!isNaN(word)) {
    word = prompt("inserisci una parola");
}

function capitalize(x){
    var toCap = x[0];
    toCap = toCap.toUpperCase();
    x = x.substring(1).toLowerCase();
    x = toCap + x;
    return x;
}

document.getElementById("printer").innerHTML = (capitalize(word));