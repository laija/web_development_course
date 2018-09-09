import { Component, OnInit } from '@angular/core'; //permite crear un componentes luego usando el decorardor, esto esta en @angular /core

// Definicion del propio componente, no es una funcion, sino aporta un funcionalidad a una clase,que van a modificar el comportamiento de la clase segun lo que se especifique 
//las directivas son pequennas funciones o funcionalidades que se utilizan en las vistas, la etiquete de un componente es una directiva  

// etiqueta donde se carga el componente
// plantilla asociada al componente
@Component({
  selector: 'app-about',  
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// decorador de la clase
// usando export permite que la clase se use dentro de otro fichero
// para usar cualquiera de estas propiedades en la platilla, se llaman con {{<propiedad_name>}}
export class AboutComponent implements OnInit {  
	public title: string; 
	public subtitle: string;
	public email: string;

  // el constructor es un metodo, es el primer metodo que se carga al instanciar un objeto
  constructor() { 
  	this.title = "Luis Laija";
  	this.subtitle = "This is about me, This is my moment!!";
  	this .email = "laija.rojas@hcl.com";
  }

  // este es el metodo que corre despues del constructor en cualquier componente de angular  
  ngOnInit() {
  }

}
