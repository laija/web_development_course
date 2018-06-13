'use-strict'

// Funciones 
function porConsola(numero1,numero2){
	console.log("Suma = " + (numero1+numero2));
}

function porPantalla(numero1,numero2){
	document.write("Suma = " + (numero1+numero2));
}

function calculadora(i, j, mostrar= false){
	if (mostrar==false)
	{
		porConsola(i,j);
	}else{
		porPantalla(i,j);
	}
	return true
}

calculadora(6,3);
calculadora(6,6,false);
calculadora(6,9,true);