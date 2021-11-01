//variables globales;
var stringTexto = "texto generado";
var enteroNumero = 1;


function resultado1() {
   // variables locales
   var stringVarLocal = " variable local";

   var res = document.getElementById("principal");

   res.innerHTML = stringTexto + stringVarLocal;


   
}

function resultado2() {
   var stringVarLocal = " variable local";
   var res2 = document.getElementById("secundario");

   res2.innerHTML = enteroNumero + stringVarLocal;

}

function arreglos() {

   //var arreglo = new Array(5);
   // var arreglo2D = [["0-0","0-1"],["1-0","1-1"],["2-0","2-1"]];

   //arreglo = [1,3,4,"texto1", "texto2","texto3"];
   /*
    arreglo.push(1);
    arreglo.push("texto1");
    arreglo.push("texto2");
    arreglo.push(234);
    */

   /*
   console.log("arreglo2D: ", arreglo2D[0][0]);
 
  
   for (var index = 0; index < arreglo2D.length; index ++) {
      console.log("ciclo1: ", index);
      console.log("arreglo resultado1 : ", arreglo2D[index]);
      for (var index2 = 0; index2 < 2; index2 ++) {
         console.log("ciclo2: ", index2);
         console.log("arreglo resultado2 : ", arreglo2D[index][index2]);
      } 
   }

   */

}

////juego de gato y raton
//var tablero = [[[],[],[]],[[],[],[]],[[],[],[]]];
var tablero = new Array(3);
for (var i = 0; i < 3; i++) {
   tablero[i] = new Array(3);
}

var estatus = false;

function leerTablero() {



   for (let index = 0; index < 3; index++) {
      for (let j = 0; j < 3; j++) {

         var valor = document.getElementById(componerId(index, j));

         if (estatus) {
            valor.setAttribute("disabled", true);
         } else {
            tablero[index][j] = valor.value;
         }


         //console.log("cordenada: ", componerId(index, j), " valor: ", valor.value);

      }
   }


   buscarGanador();
}

function buscarGanador() {

   for (let index = 0; index < 3; index++) {
      leerFila(index);
      leerColumna(index);
   }

   leerDiagonal();
   //console.log("arreglo: ", tablero);
}

function leerFila(index) {
   var valor0 = tablero[index][0];
   var valor1 = tablero[index][1];
   var valor2 = tablero[index][2];
   if (valor0.length > 0 && valor1.length > 0 && valor1.length > 0) {

      if (valor0 === valor1 && valor1 === valor2) {
         console.log('arreglo: ', tablero);


         var elemnt1 = document.getElementById(componerId(index, 0))
         var elemnt2 = document.getElementById(componerId(index, 1))
         var elemnt3 = document.getElementById(componerId(index, 2))
         elemnt1.setAttribute("class", "select-ganador");
         elemnt2.setAttribute("class", "select-ganador");
         elemnt3.setAttribute("class", "select-ganador");

         alert("juego terminado: " + valor0);
         estatus = true;
      }
   }

}
function leerColumna(index) {
   var valor0 = tablero[0][index];
   var valor1 = tablero[1][index];
   var valor2 = tablero[2][index];
   if (valor0.length > 0 && valor1.length > 0 && valor1.length > 0) {

      if (valor0 === valor1 && valor1 === valor2) {
         console.log('arreglo: ', tablero);


         var elemnt1 = document.getElementById(componerId(0, index))
         var elemnt2 = document.getElementById(componerId(1, index))
         var elemnt3 = document.getElementById(componerId(2, index))
         elemnt1.setAttribute("class", "select-ganador");
         elemnt2.setAttribute("class", "select-ganador");
         elemnt3.setAttribute("class", "select-ganador");

         alert("juego terminado: " + valor0);
         estatus = true;

      }
   }
}
function leerDiagonal() {
   var valor0 = tablero[0][0];
   var valor1 = tablero[1][1];
   var valor2 = tablero[2][2];
   var valor3 = tablero[0][2];
   var valor4 = tablero[1][1];
   var valor5 = tablero[2][0];
   if (valor0.length > 0 && valor1.length > 0 && valor1.length > 0) {

      if (valor0 === valor1 && valor1 === valor2) {
         console.log('arreglo: ', tablero);


         var elemnt1 = document.getElementById(componerId(0, 0))
         var elemnt2 = document.getElementById(componerId(1, 1))
         var elemnt3 = document.getElementById(componerId(2, 2))
         elemnt1.setAttribute("class", "select-ganador");
         elemnt2.setAttribute("class", "select-ganador");
         elemnt3.setAttribute("class", "select-ganador");

         alert("juego terminado: " + valor0);
         estatus = true;

      }
   }
   if (valor3.length > 0 && valor4.length > 0 && valor5.length > 0) {

      if (valor3 === valor4 && valor4 === valor5) {
         console.log('arreglo: ', tablero);


         var elemnt1 = document.getElementById(componerId(0, 2))
         var elemnt2 = document.getElementById(componerId(1, 1))
         var elemnt3 = document.getElementById(componerId(2, 0))
         elemnt1.setAttribute("class", "select-ganador");
         elemnt2.setAttribute("class", "select-ganador");
         elemnt3.setAttribute("class", "select-ganador");

         alert("juego terminado: " + valor3);
         estatus = true;

      }
   }
}


function reiniciar() {
   location.reload(true);
}


function componerId(index, j) {
   return index + "-" + j;
}
// que leea el tablero
// que inicie el juego
// que se mueva 
// que genere la comida
// que coma 


////fin juego de gato y raton

//ejemplos de jquery juego de serpiente

/*
function onValorElemento(elemnt) {
  
   console.log("valor1: ", $('#serpeinte-1-1').text());
   $(elemnt).addClass("subrallar");
   console.log("valor2: ", $(elemnt).text());
}

*/


var largoTablero = 10;
var altoTablero = 10;

var direccionMovimiento = 68;
var velocidadJuego = 500;
var velocidadGenerarComida = 5000;
var ubicacionComida = [];
var cuerpoSerpiente = [[4, 2]];


function iniciarJuegoSerpiente() {
   leerTableroSerpiente();
   detectarDirreccion();
   iniciarVelocidadJuego();
   generarComida();
}

function iniciarVelocidadJuego() {

   setInterval(() => {
      moverSerpiente();
   }, velocidadJuego);
}

function generarComida() {

   setInterval(() => {
      if (ubicacionComida.length <= 0) {
         var rock = [];
         rock.push(Math.floor(Math.random() * (9 - 0)) + 0);
         rock.push(Math.floor(Math.random() * (9 - 0)) + 0);

         rock[0] = rock[0] === 0 ? 1 : rock[0];
         rock[1] = rock[1] === 0 ? 1 : rock[1];
         ubicacionComida = rock;
         console.log("comida: ", ubicacionComida);
      }

   }, velocidadGenerarComida);
}

function detectarDirreccion() {
   var pressedKeys = {};
   window.onkeydown = function (e) {
      pressedKeys[e.keyCode] = true;

      switch (e.keyCode) {
         case 68:
            direccionMovimiento = 68;
            break;
         case 83:
            direccionMovimiento = 83;
            break;
         case 65:
            direccionMovimiento = 65;
            break;
         case 87:
            direccionMovimiento = 87;
            break;
         default:
            console.log("Esta tecla no es de dirrección");
            break;
      }

   }
}

function moverSerpiente() {

   switch (direccionMovimiento) {
      case 68:
         cuerpoSerpiente.unshift([cuerpoSerpiente[0][0], cuerpoSerpiente[0][1] + 1]);
         cuerpoSerpiente.pop();

         leerTableroSerpiente()
         break;
      case 83:

         cuerpoSerpiente.unshift([cuerpoSerpiente[0][0] + 1, cuerpoSerpiente[0][1]]);
         cuerpoSerpiente.pop();

         leerTableroSerpiente()
         break;
      case 65:

         cuerpoSerpiente.unshift([cuerpoSerpiente[0][0], cuerpoSerpiente[0][1] - 1]);
         cuerpoSerpiente.pop();

         leerTableroSerpiente()
         break;
      case 87:
         cuerpoSerpiente.unshift([cuerpoSerpiente[0][0] - 1, cuerpoSerpiente[0][1]]);
         cuerpoSerpiente.pop();

         leerTableroSerpiente()
         break;
      default:
         break;
   }

}


function leerTableroSerpiente() {
   $("#tableroSerpiente td").removeClass("subrallar");

   for (let index = 1; index <= largoTablero; index++) {

      filasTR = $("#tableroSerpiente tr:nth-child(" + index + ")");

      for (let index2 = 1; index2 <= altoTablero; index2++) {

         columnaTD = $(filasTR).find($("td:nth-child(" + index2 + ")"));

         if (index === ubicacionComida[0] && index2 === ubicacionComida[1]) {

            // $("#tableroSerpiente td").removeClass("subrallar");
            $(columnaTD).addClass('subrallarComida');
         }

         pintarCuerpo(index, index2, columnaTD);
      }
   }
}

function pintarCuerpo(index, index2, columnaTD) {
   [[4, 2], [4, 3]]

   for (let index3 = 0; index < cuerpoSerpiente.length; index3++) {
      const res = cuerpoSerpiente[index3];
      if (index === res[0] && index2 === res[1]) {
         $(columnaTD).addClass('subrallar');
      }

   }

   cuerpoSerpiente.map(res => {
      if (index === res[0] && index2 === res[1]) {
         //console.log("ubicacion inicial: ", res)
         $(columnaTD).addClass('subrallar');
      }
      comer(res[0], res[1]);
   })
}
function comer(res1, res2) {
   if (res1 === ubicacionComida[0] && res2 === ubicacionComida[1]) {
      //$(columnaTD).removeClass('subrallarComida');
      $("#tableroSerpiente td").removeClass("subrallarComida");
      ubicacionComida = [];
      console.log("se comio la comida")
      cuerpoSerpiente.push([cuerpoSerpiente[cuerpoSerpiente.length - 1][0], cuerpoSerpiente[cuerpoSerpiente.length - 1][1]])
   }
}



/*
function chocarCuerpo(res1, res2) {
   if (ubicacionInicial[0] === res1 && ubicacionInicial[1] === res2) {
      console.log("la serpeinte choco con su cuerpo")
      $('#mensaje').html('la serpeinte choco con su cuerpo');

      ubicacionInicial = [];
      ubicacionComida = [];
      cuerpoSerpiente = [[4, 2]];

   }
}

*/
