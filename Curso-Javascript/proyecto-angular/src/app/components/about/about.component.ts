import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public title: string;
	public subtitle: string;
	public email: string;
  constructor() { 
  	this.title = "Luis Laija";
  	this.subtitle = "This is about me, This is my moment!!";
  	this .email = "laija.rojas@hcl.com";
  }

  ngOnInit() {
  }

}
