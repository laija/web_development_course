"use-strict"

/*
Hacer una calculadora 
*/

var numero_1 = parseInt(prompt("Ingresa el primer numero",0));
var numero_2 = parseInt(prompt("Ingresa el segundo numero",0));

while(true){
	if(isNaN(numero_1)||isNaN(numero_2)){
	var numero_1 = parseInt(prompt("Ingresa el primer numero",0));
	var numero_2 = parseInt(prompt("Ingresa el segundo numero",0));
	}else{
		break
	}
}

/*
console.log("suma = " + numero_1 + numero_2); 
console.log("resta = " + numero_1 - numero_2); 
console.log("multiplicacion = " + numero_1 * numero_2); 
console.log("division = " + numero_1 / numero_2); */

var resultado = "La suma es: " + (numero_2+numero_1) + " \n" +
				"La resta es: " + (numero_2-numero_1) + " \n" +
				"La multiplicacion es: " + (numero_2*numero_1) + " \n" +
				"La division es: " + (numero_2/numero_1) + " \n" ;

document.write(resultado);
alert(resultado);