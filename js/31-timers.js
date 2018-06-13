'use-strict'

window.addEventListener('load',function(){
	//timer

	// setinterval - se ejecuta cada cierto tiempo 
	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set interval ejecutado");
			var encabezado = document.querySelector("h1");
			if( encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px"
			}else{
				encabezado.style.fontSize = "50px";

			}
		}, 3000);	// se ejecuta cada  3000 milisegundos 	
		return tiempo;	
	}

	var tiempo = intervalo();
	//setTimeOut - se ejecuta una sola vez  

	// setinterval - se ejecuta cada cierto tiempo 
	var timeout = setTimeout(function(){
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("#boton");
		if( encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "30px"
		}else{
			encabezado.style.fontSize = "50px";

		}
	}, 3000);	// se ejecuta cada  3000 milisegundos 	

	// para el set interval
	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function(){
		alert("Has parado el tiempo en bucle");
		clearInterval(tiempo);
	})

	var start = document.querySelector("#start");
	start.addEventListener("click", function(){
		alert("Has iniciado el tiempo en bucle");
		intervalo(tiempo);
	})
});

