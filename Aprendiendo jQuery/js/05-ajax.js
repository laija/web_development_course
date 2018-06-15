/* Ajax es una tecnologia que nos permite realizar peticiones asincronas a un servidor y recoger los resultado sin necesidad de recargar la pagina*/

$(document).ready(function(){
	// Load nos permite carga el resultado de un get e inyectarlo en algun elmento de la pagina 
	//$("#datos").load("https://reqres.in/");

	// Get y Post 
	$.get("https://reqres.in/api/users", {page: 3}, function(response){
		console.log(response);
		response.data.forEach((element, index) =>{
			$("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")
		});
	});

	$("#formulario").submit(function(e){
		e.preventDefault();
		var usuario = {
			"name": $('input[name="name"]').val(),
			"web": $('input[name="web"]').val()
		};
		console.log(usuario);
		$.post($(this).attr("action"),usuario, function(response){
			console.log(response);
		}).done(function(){
			console.log("usuario annadido correctamente");
		});
		return false;
	});
})