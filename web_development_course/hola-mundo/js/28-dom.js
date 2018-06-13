'use-strict'

/*
Document object model
*/

// funcion cambia color de background con el elemento ID caja
function cambiaColor(color){
	caja.style.background = color;
	//laCaja.style.background = color;
}

var miCaja=document.getElementById("caja").innerHTML;
console.log(miCaja);

var miCaja=document.getElementById("caja");
console.log(miCaja);

caja.innerHTML = "Cambiando texto con js";
console.log(caja);

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

//annadir clase hola al elemento con id clase 
caja.className = "hola";

// el query selector es mas facil que jquery 
var laCaja = document.querySelector("#caja"); //# es para id y . es para clases 
console.log(laCaja);

//Conseguir elmentos por su etiqueda/id
var todosLosDiv = document.getElementsByTagName('div');
console.log(todosLosDiv);

var contenidoEnTexto = todosLosDiv[1];
console.log(contenidoEnTexto);
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento"
contenidoEnTexto.style.background = "blue";
console.log("--------------------------");
//forEach solo funciona par arreglos que nosotroas hayamos creado con valores 
var valor;
//todosLosDiv.forEach((valor.indice)=>{
for(valor in todosLosDiv){
	if(typeof(todosLosDiv[valor].textContent) == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDiv[valor].textContent);
		parrafo.append(texto);
//		document.querySelector("#miSection").appendChild(parrafo);
		miSection.append(parrafo);
	}
}
//});

var hr = document.createElement("hr");
miSection.append(hr);

//Conseguir elmentos por su clases

var divsRojos  = document.getElementsByClassName('rojo');
var div;
for(div in divsRojos){
	if(divsRojos[div].className == 'rojo'){
		divsRojos[div].style.background = 'grey';	
	}
	
}






