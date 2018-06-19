
/* En cualquier lenguaje de programacion nos sirve como molde, para luego crear varias entidades/objetos de ese tipo */

var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velocidadMaxima: '60km',
	cambiaColor: function(nuevo_color) {
		//bicicleta.color = nuevo_color
		this.color = nuevo_color;
		console.log(this);
	}
}

bicicleta.cambiaColor("marron");
