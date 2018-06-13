"use strict"

/*

*/

var texto = "un texto";
var numero = 5

function holaMundo(texto){
	var hola_mundo = "Texto dentro de function"
	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);
}
// toString() sirve para convertir un numero a un string

holaMundo(texto);
/* no puedo llamar a la variable hola_mundo porque no esta 
definida en el ambito global del programa 
*/
//console.log(hola_mundo);
