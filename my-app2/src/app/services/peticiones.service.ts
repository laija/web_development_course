// estos son modulos 
import { Injectable } from '@angular/core' ; // para poder injectar nuestro servicio en otras clases
import { HttpClient, HttpHeaders } from '@angular/common/http';// estos 2 module nos permitiran hacer petinoes ajax a un servicio/url  y tambien modificar las cabeceras de esa peticiones
import { Observable } from 'rxjs'; // con este vamos a recoger la information que nos regresen cuando se haga un API rest  

// este es un decorador que se utiliza sobre la clase que se va a insertar 
@Injectable()
export class PeticionesService{
	public url: string;
	constructor(
		public _http: HttpClient
	){
		this.url="https://reqres.in/";
	}

	getUser(userId): Observable<any>{
		return this._http.get(this.url+'api/users/' + userId);
	}
} 