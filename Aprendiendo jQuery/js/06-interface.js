$(document).ready(function(){
	console.log("document is ready");
	$(".elemento").draggable();

	//Redimencionar 

	$(".elemento").resizable();

	// Seleccionar elementos 
	//$(".lista-seleccionable").selectable();

	$(".lista-seleccionable").sortable({
		update: function(event,ui){
			console.log("Ha cambiado la lista");
		}
	}); // sirve para ordenar by draggin  but doesnt work with selectable 


	// Drop 
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado alto dentro del area");
		}
	});

	//Efectos 
	$("#mostrar").click(function(){
		$(".caja-efectos").fadeToggle();
	});

	//
	$(document).tooltip();

	// Dialog
	$("#lanzar-popup").click(function(){
		$(".popup").dialog();
	});
	
	// Datepicker
	$('#calendario').datepicker();

	//tabs 
	$("#pestanas").tabs()


});
