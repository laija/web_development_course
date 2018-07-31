import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs-compat/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url: string;

  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
  }

  getProductos(){
    return this._http.get(this.url+'/api/users?page=2').map(res => res.json());
  }

}

/*import { Injectable } from '@angular/core'; // modulo injectable para poder injectar los servicios 
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';  // para poder utilizar el metodo map y mapear las respuestas 
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
	public url: string;
  constructor(
  	public _http // injectando el servicio para poder hacer peticiones ajax dentro de esta clase 
  	) { 
  		this.url = GLOBAL.url;
  }


}
*/