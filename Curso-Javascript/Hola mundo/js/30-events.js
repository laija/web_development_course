

// load event -se dispara ya que carga todo 

//"Focus" del campo cuyo nombre tiene campo nombre, estas dentro de 

window.addEventListener('load',function(){ 
	var input =document.querySelector("#campo_nombre")
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input!!")
	});

	//Blur, se dispara al salir del elemento
	input.addEventListener('blur', function(){
		console.log("blur- Estas fuera del input!!")
	});

	//Keydown
	input.addEventListener('keydown', function(){
		console.log("keydown- Estas pulsando esta tecla!!", String.fromCharCode(event.keyCode));

	});

	//Keypress
	input.addEventListener('keypress', function(){
		console.log("keypress- Tecla presionada", String.fromCharCode(event.keyCode));
	});

	//Keyup 
	input.addEventListener('keyup', function(){
		console.log("keyup- Tecla soldada", String.fromCharCode(event.keyCode));
	});

});


