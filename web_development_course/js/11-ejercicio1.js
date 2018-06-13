'use strict'

/*
haver un programa que nos diga cual es mayor, cual es menor o si son iguales 
Plus, si los numero no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/


var number_01 = parseInt(prompt("Ingresa el primer valor:",0));
var number_02 = parseInt(prompt("Ingresa el segundo valor:",0));
console.log(isNaN(number_01))
while(true) {
	if(isNaN(number_01) || number_01 <= 0){
		number_01 = parseInt(prompt("Ingresa el primer valor nuevamente:",0));
	}
	else{
		break
	}
}

if ( number_01 > number_02){
	alert(number_01  + " es mayor.");
}else if(number_01 < number_02){
	alert(number_02  + " es mayor.");
}else if(number_01 == number_02){
	alert("Ambos numero son igules");
}else{
	alert("Introduce numeros correctos.")
}