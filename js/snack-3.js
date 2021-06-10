// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altroes. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var listOne = [1, 2, 3];
var listTwo = ["a", "b", "c"];

function merge(x, y) {
    if (x.length != y.length) {
        alert("I due array devono avere la stessa lunghezza")
    } else {
        var elenco = [];

        for (var i = 0; i < x.length; i++) {
            elenco.push(x[i], y[i]);
        };
        return elenco;
    };
};

document.getElementById("printer").innerHTML = merge(listOne, listTwo);