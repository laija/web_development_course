$(document).ready(function(){
	var caja= $("#caja");
	$("#mostrar").hide(); // 'normal' 'fast' 'slow' 

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeIn(); // normal fast slow 
		caja.fadeTo('normal',1); // sliceDow to show
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.fadeOut();
		caja.fadeTo('normal',0,function(){
			console.log("Cartel oculatado");
		}); // .sliceUp to hide

	});

	$("#TodoEnUno").click(function(){
		///$("#caja").toggle('fast');
		caja.slideToggle('fast');

	}),

	$("#animar").click(function(){
		caja.animate({marginLeft:'500px',
					fontSize: '40px',
					height: '110px',
					borderRadius: '900px'
					},'slow') //la animacion se indica dentro de un Json
			.animate({
				marginTop:'50px'
			},'slow')
			.animate({
				marginLeft:'0px',
				borderRadius: '0px'
			},'slow')
			.animate({
				borderRadius: '100px',
				marginTop:'0px'
			},'slow')						
		;
	});
})