'use-strict'
/*
nos dice si un numero es par o impar
la venta que nos pida el numero 
si no es valido que nos pida nuevamente el numero 
*/




var number = parseInt(prompt("Ingresa un numero para saver si es par o impar",0));

while(true){	
	if(isNaN(number)){
		number = parseInt(prompt("Ingresa un numero para saver si es par o impar",0));
	}else{
		break;
	}
}

if( number%0 == 0){
	console.log(number + " es par.")
}else{
	console.log(number + " es impar.")
}