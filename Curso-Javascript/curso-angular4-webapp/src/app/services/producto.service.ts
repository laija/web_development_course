import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs-compat/Observable';
import { Usuario } from '../models/producto';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  getProductos(){
    return this._http.get(this.url+'/api/users?page=2');
  }

  addProducto(user: Usuario){
    return this._http.post(this.url+'/api/users',user);
  }

  getUsuario(id){
    return this._http.get(this.url+'/api/users/' + id);
  }

}

