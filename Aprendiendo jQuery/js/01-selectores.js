 // $ significa el objeto jQuery 
 // (document) significa el selector ya que cargue el documento 
 // ready, es un evento/metodo 

 $(document).ready(function(){
 	// Selector ID
 	$("#rojo").css("background","red")
 							.css("color","white");
 	$("#amarillo").css("background","yellow")
 								.css("color","green");
 	$("#verde").css("background","green")
 				.css("color","white");


	// Selectores de clase, las clases se utilizan cuando se necesitan seleccionar mucho elementos y se necesita darle propiedades comunes 
	var miClase = $('.zebra').css("padding","5px");
	

	$('.sin_bordes').click(function(){
		$(this).addClass('zebra');
	});

	// Selectores por etiqueta 

	var parrafos = $('p').css("cursor","pointer");

	parrafos.click(function(){
		var that = $ (this);
		if(!that.hasClass('grande')){
			that.addClass('grande');	
		}else {
			that.removeClass('grande');
		}
	});

	// Selectores de atributo 
	$('[title="google"').css('background','green');
	$('[title="facebook"]').css('background','black');

	// Otros
	//$('p,a').addClass('margen-superior');

	var busqueda=$(".caja").find('.resaltado').eq(0).parent().parent().parent().find('[title ="google"]');
	//para lleva un nivel arriba
	console.log(busqueda);



 });