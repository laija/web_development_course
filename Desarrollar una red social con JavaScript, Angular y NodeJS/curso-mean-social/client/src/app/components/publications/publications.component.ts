import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Publication } from '../../models/publication';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { PublicationService } from '../../services/publication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [UserService, PublicationService]
})

export class PublicationsComponent implements OnInit {
	public identity;
	public token;
	public title: string;
	public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public publications: Publication[]; 
  public noMore = false;

  @Input() user:  string; 

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
    private _publication: PublicationService
  	) {
  		this.title = 'Publications';
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBAL.url;
      this.page = 1;
  	}

  ngOnInit() {
    this.getPublicationsUsingUser(this.user, this.page);
  }


  getPublications(user, page,adding = false){
    this._publication.getPublicationsUser(this.token, user, page).subscribe(
      response =>{
        if(response.publications){
          this.total = response.total_items;
          this.pages = response.pages;
          this.itemsPerPage = response.items_per_page;
          if(!adding){
            this.publications = response.publications;
          }else{
            var arrayA = this.publications;
            var arrayB = response.publications;
            this.publications = arrayA.concat(arrayB);
            $("html, body").animate({scrollTop: $('body').prop("scrollHeight")}, 500);

          }
          if(page > this.pages){
            this._router.navigate(['/home']);
          }
        }else{
          this.status = 'error';
        }
      }, 
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

  getPublicationsUsingUser(user, page,adding = false){
    this._publication.getPublicationsByUser(this.token, user, page).subscribe(
      response =>{
        console.log(response.publications)
        if(response.publications){
          this.total = response.total_items;
          this.pages = response.pages;
          this.itemsPerPage = response.items_per_page;
          if(!adding){
            this.publications = response.publications;
          }else{
            var arrayA = this.publications;
            var arrayB = response.publications;
            this.publications = arrayA.concat(arrayB);
            $("html, body").animate({scrollTop: $('body').prop("scrollHeight")}, 500);

          }
        }else{
          this.status = 'error';
        }
      }, 
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }
  

  viewMore(){
    console.log(this.publications.length)
    if(this.publications.length == this.total){
      this.noMore = true;
    }else {
      this.page +=1 ;
    }
    this.getPublicationsUsingUser(this.user, this.page, true);
  }

}
