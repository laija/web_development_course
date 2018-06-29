

$(document).ready(function(){
	//alert("eventos cargado");

	//MouseOver y MouseOut
	var caja = $("#caja");


	
	caja.mouseover(function(){
		$(this).css('background','red');
	})

	caja.mouseout(function(){
		$(this).css('background','green');
	})
	
	// Hover
/*
	function cambiaRojo(){
		($this).css('background','red');
	}
	function cambiaVerde(){
		($this).css('background','green')
	}
	caja.hover(cambiaRojo,cambiaVerde);
*/
	caja.click(function(){
		$(this).css("background","blue")
			   .css('color','white');
	});
	// Click, doble click 

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css('color','yelow');
	});

	// Focus blur
	var nombre=$("#nombre");
	var datos=$("#datos");

	nombre.focus(function(){
		$(this).css("border","6px solid green");
	});

	nombre.blur(function(){
		$(this).css("border","1px solid #ccc")
		datos.text($(this).val()).show();
	});

	//Mousedown y mouseup 
	datos.mousedown(function(){
		$(this).css("border-color", "blue");
	})

	datos.mouseup(function(){
		$(this).css("border-color", "black");
	})

	// Mousemove
	$(document).mousemove(function(){
		console.log( + "," + event.clientY);/*
		$("#sigueme").css("left",event.clientX)
		$("#sigueme").css("top",event.clientY)*/
		$('body').css("cursor","none");
		$("#sigueme").css("left",event.clientX).css("top",event.clientY)
	})
});