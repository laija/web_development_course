'use strict'

//Pruebas con let y var 
// var altera el valor de la variable a nivel global 
var numero  = 40 ;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero);
}

console.log(numero);

///////////////////////////////////////////////////////////////
// Let funciona a nivel de bloque creado una variable en ese bloque 
var texto = "Cusedo JS Luis Laija";
console.log(texto);

if(true){
	let texto = "Cuarso laravel 5";
	console.log(texto);
}

console.log(texto);