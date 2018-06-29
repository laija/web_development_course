import { Router, ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector:'videojuego',
	templateUrl: './videojuego.component.html'

})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy
{
	public titulo: string;
	public listado: string;
	public nombre: string;
	public followers: number;

	// primero se ejecuta el contructor porque es lo primero que se ejecuta en cualquier clase 
	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = "Componente de video juegos"
		this.listado = "listato de los juego mas populares"
		//console.log('Se cargo el constructor de videojuego');
	}

	// se produce cada vez que se produce un cambio en el componente o en la aplicacion de angular 
	ngDoCheck(){
		console.log("DoCheck ejecutado!!!");
	}

	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente."
	}

	// Que se ejecute algo antes de eliminar la instancia de un componente 

	ngOnDestroy(){
		console.log("On Destroy ejecutado");
	}

	redirigir(){
		this._router.navigate(['/zapatillas']);
	}

	// se ejecuta inmediament despues de que se carga el componente
	ngOnInit(){
		this._route.params.subscribe((params: Params) => {
			this.nombre = params.nombre;
			this.followers = +params.followers;

			if(this.nombre == 'ninguno'){
				this._router.navigate(['/home']);
			}
			});
		}
}	
