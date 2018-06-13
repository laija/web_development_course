'use-strict'

/*
Eventos es una funcion que se ejecuta cuando sucede algo 
*/

// Eventos del raton 


//evento click
function cambiarColor(){
	var bg =boton.style.background;
	if( bg == "green"){
		boton.style.background = "red" ;
		boton.style.padding = "10px";
		//alert("Auch!! eso dolio");
	}else{
		boton.style.background ="green" ;
		boton.style.border = "1px solid #ccc";		
		boton.style.padding = "0px";
	}
	return true;
}

var boton = document.querySelector("#boton");

 
boton.addEventListener('click',function(){
	cambiarColor();
})

//mouse over
boton.addEventListener('mouseover', function(){
	boton.style.background = "#ccc";
});

boton.addEventListener('mouseout', function(){
	boton.style.background = "blue";
});