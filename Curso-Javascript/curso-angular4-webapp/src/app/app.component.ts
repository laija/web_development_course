import { Component } from '@angular/core';
import { GLOBAL } from './services/global' ; // pra tener las variables del objetos global disponibles 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projecto Angular';
  public header_color:  string;

  constructor(){
  	this.header_color = GLOBAL.header_color;
  }
}
