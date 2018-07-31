import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
	public title: string;
  constructor() { 
  	this.title = 'This is my title';
  }

  ngOnInit() {
  }

}
