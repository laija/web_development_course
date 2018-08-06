import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Usuarios } from '../../models/producto';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css'],
  providers: [ ProductoService ]
})
export class ProductoDetailComponent implements OnInit {
  public usuario: Usuarios;
  constructor(
  	private _productoService: ProductoService,
  	private _route: ActivatedRoute,
  	private _router: Router
  	){}

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      this._productoService.getUsuario(id).subscribe(result => {
        this.usuario = result.data;
        console.log(result);
      },
      error =>{
        console.log(<any>error);
      });
    })
  }
}
