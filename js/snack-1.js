// 3.1.   Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function stripElements (x, a, b) {
    var result = [];
    if (a > b) {
        for (var i = b - 1; i < a; i++) {
            result.push(x[i]);
        }
    } else {
        for (var i = a - 1; i < b; i++) {
            result.push(x[i]);
        }
    }
    return result;
}
document.getElementById("printer").innerHTML = stripElements(list, 5, 10);
document.getElementById("printer").innerHTML += "<br>" + stripElements(list, 10, 5);