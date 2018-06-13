'use-strict'

/*
motras los numero divisores de un numero introducido en un prompt 
*/

var numero1 = parseInt(prompt("Introduce el primer numero",5));

for(var i = 1; i < numero1 ; i++){
	if(numero1 % i == 0){
		console.log(i + " es divisor de " + numero1);
	}
}