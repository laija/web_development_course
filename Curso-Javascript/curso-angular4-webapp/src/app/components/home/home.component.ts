import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public titulo: string;
  constructor() {
  	this.titulo ="web app de productos " }
 
  ngOnInit() {
   	console.log("se ha cargado el componenete");
  
  }

}
