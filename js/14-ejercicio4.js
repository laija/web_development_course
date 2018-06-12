"uses strict"

/*
mostrar todos los numero impares entre 2 numero que fueron ingresados por el teclado 

*/

var number_01 = parseInt(prompt("insert first number: "));
var number_02 = parseInt(prompt("insert second number: "));

document.write("<h1> de " + number_01 + " a " + number_02 + "</h1>");
for (var i=number_01 +1 ; i < number_02 ; i++ ){
	if( i % 2 == 1 ){
		document.write("<h1> " + i + "</h1>");
	}
}