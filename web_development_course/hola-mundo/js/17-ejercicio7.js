'use-strict'
/*
tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("Ingresa un numero",0));

while (true){
	if(isNaN(numero))	{
		numero = parseInt(prompt("Ingresa un numero",0));
	}else{
		break
	}
}

document.write("<h1>table del " + numero + "</h1>");
for(var i=1; i < 11; i++){
	document.write( i + " x " + numero + " = " + i*numero + "</br>");
}

document.write("<h1> Todas las tablas de multiplicar");

for(var i = 1 ; i < 11 ; i++){

	document.write("<h1> table del " + i +"</h1>");
	for( var j = 1; j < 11 ; j++ ){
		document.write( i + " x " + j + " = " + i*j + "</br>" );
	}
//	document.write("</br>");
}