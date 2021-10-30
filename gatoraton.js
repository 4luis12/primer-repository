
//var tablero = [[[],[],[]],[[],[],[]],[[],[],[]]];
var tablero = new Array(3);
for (var i = 0; i < 3; i++) {
    tablero[i] = new Array(3);
}

var jugandoCeldasllenas = 0;

function leerTablero() {
    jugandoCeldasllenas = 0;
    for (let index = 0; index < 3; index++) {
        for (let j = 0; j < 3; j++) {
            var valor = document.getElementById(componerId(index, j));
            tablero[index][j] = valor.value;

            if (valor.value.length > 0) {
                jugandoCeldasllenas += 1;
            }

        }
    }
    console.log(tablero);
    console.log("celdas: " + jugandoCeldasllenas);

    buscarGanador();
}


function buscarGanador() {
    var resul = { resultado: false, valor: "" };
    for (let index = 0; index < 3; index++) {

        resul = leerFila(index);
        if (resul.resultado) {
            alert("Hay un ganador: fila " + resul.valor);

            break;
        } else {
            var resul = leerColumna(index);
            if (resul.resultado) {
                alert("Hay un ganador: columna " + resul.valor);
                break;
            }
        }
    }
    if (!resul.resultado) {

        var resul = leerDiagonal();
        if (resul.resultado) {
            alert("Hay un ganador: diagonal " + resul.valor);

        } else {
            if (jugandoCeldasllenas === 9) {
                alert("Juego terminado. Empatados");
            } else {
                alert("sigue jugando...");
            }
        }
    }

}



function leerFila(n) {
    var valor0 = tablero[n][0];
    var valor1 = tablero[n][1];
    var valor2 = tablero[n][2];

    if (valor0 === valor1 && valor1 === valor2 && valor0.length > 0) {
        var elemnt1 = document.getElementById(componerId(n, 0))
        var elemnt2 = document.getElementById(componerId(n, 1))
        var elemnt3 = document.getElementById(componerId(n, 2))
        elemnt1.setAttribute("class", "select-ganador");
        elemnt2.setAttribute("class", "select-ganador");
        elemnt3.setAttribute("class", "select-ganador");
        return { resultado: true, valor: valor0 }
    } else {
        return { resultado: false, valor: "" };
    }
}
function leerColumna(n) {
    var valor0 = tablero[0][n];
    var valor1 = tablero[1][n];
    var valor2 = tablero[2][n];
    if (valor0 === valor1 && valor1 === valor2 && valor0.length > 0) {
        var elemnt1 = document.getElementById(componerId(0, n))
        var elemnt2 = document.getElementById(componerId(1, n))
        var elemnt3 = document.getElementById(componerId(2, n))
        elemnt1.setAttribute("class", "select-ganador");
        elemnt2.setAttribute("class", "select-ganador");
        elemnt3.setAttribute("class", "select-ganador");
        return { resultado: true, valor: valor0 }
    } else {
        return { resultado: false, valor: "" };
    }
}
function leerDiagonal() {

    var valor0 = tablero[0][0];
    var valor1 = tablero[1][1];
    var valor2 = tablero[2][2];
    var valor3 = tablero[0][2];
    var valor4 = tablero[1][1];
    var valor5 = tablero[2][0];
    if (valor0 === valor1 && valor1 === valor2 && valor0.length > 0) {
        var elemnt1 = document.getElementById(componerId(0, 0))
        var elemnt2 = document.getElementById(componerId(1, 1))
        var elemnt3 = document.getElementById(componerId(2, 2))
        elemnt1.setAttribute("class", "select-ganador");
        elemnt2.setAttribute("class", "select-ganador");
        elemnt3.setAttribute("class", "select-ganador");


        return { resultado: true, valor: valor0 }
    } else {
        if (valor3 === valor4 && valor4 === valor5 && valor3.length > 0) {
            var elemnt1 = document.getElementById(componerId(0, 2))
            var elemnt2 = document.getElementById(componerId(1, 1))
            var elemnt3 = document.getElementById(componerId(2, 0))
            elemnt1.setAttribute("class", "select-ganador");
            elemnt2.setAttribute("class", "select-ganador");
            elemnt3.setAttribute("class", "select-ganador");

            return { resultado: true, valor: valor0 }
        }
        else {
            return { resultado: false, valor: "" };
        }
    }
}



function componerId(y, x) {
    return "td-" + y + "-" + x;
}
function reiniciar() {
    location.reload(true);
}
