'use strict'

/*
utilizando un bucle mostrar la media y la suma de los numero 
sintroducidos por el usuario hasta que metamos un numero negativo y en ese caso 
se mostraria el resultado 
*/

var suma = 0;
var counter = 0;
while(true){
	var number = parseInt(prompt('Give me your number: ',0));
	if(isNaN(number)){
		continue
	}
	else if(number < 0){
		break
	}
	suma = suma + number
	counter++;
	console.log(suma);
	console.log(counter);
}
alert('La media es ' + suma/counter + " y la suma es " + suma);