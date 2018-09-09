import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import { ZapatillaService} from '../services/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService] // El servicio solo se podra user hasta que se inyecte como un provider, como un servicio de mi componente
})

export class ZapatillasComponent implements OnInit{
	//	propiedades
	public titulo: string = "Component de zapatillas"; 	public zapatillas: Array<Zapatilla>; 	public marcas: String[]; 	public color: string;	public mi_marca: string;

	constructor(
		private _zapatillaService: ZapatillaService // el servicio se injecta como un dependencia de una propiedad 
	)
	{
		this.mi_marca = "Fila";
		this.color = 'blue';
		this.marcas = new Array();
	}
	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		//alert(this._zapatillaService.getTexto());
		this.getMarcas();
	}

	// recorrer coleccion de objetos usanto el metodo 
	getMarcas(){
		this.zapatillas .forEach((zapatilla, index) =>{
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}
		});
		console.log(this.marcas);
	}

	getMarca(){
		alert(this.mi_marca);

	}

	addMarca(){
		this.marcas.push(this.mi_marca)
	}

	borrarMarca(index){
		this.marcas.splice(index,1);
	}

	mostrarPalabra(){
		alert(this.mi_marca);
	}
}
