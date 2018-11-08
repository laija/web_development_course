import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Follow } from '../../models/follow';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { GLOBAL } from '../../services/global';

// los providers sob los servicios 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService,FollowService]
})
export class UsersComponent implements OnInit {
	public title: string;
  public url: string;
	public identity;
	public token;
  public page;
  public next_page;
  public prev_page;
  public status;
  public total;
  public pages;
  public follows;
  public users: User[];


  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
      private _followService: FollowService
  	) {
  	this.title = 'People';
    this.url = GLOBAL.url;
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();

  }

  ngOnInit() {
    this.actualPage();
  }


  actualPage(){
    this._route.params.subscribe(params => {
      let page =  +params.page; // convirtiendo en entero 
      this.page = page;

      if(!params['page']){
        page = 1;
      }
      if(!page){
        page = 1;
      }else{
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page <= 0){
          this.prev_page = 1;
        }
      }
      // give list of users 
      this.getUsesr(page);
    });
  }

  getUsesr(page){
    this._userService.getUsers(page).subscribe(
      response =>{
        if(!response.usuarios){
          this.status = 'error' ;
          console.log(response.usuarios);
        }else{
          this.total = response.total;
          this.users = response.usuarios;
          this.pages = response.pages;
          this.follows = response.user_following;
          if(page > this.pages){
            this._router.navigate(['/people', 1]);
          }
        }
      },
      error =>{
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

  public followUserOver;
  mouseLeave(user_id){
    this.followUserOver = 0;
  }

  mouseEnter(user_id){
    this.followUserOver = user_id;
  }

  followUser(followed){
    var follow = new Follow('',this.identity._id,followed);
    this._followService.addFollow(this.token, follow).subscribe(
       response =>{
         if(!response.follow){
           this.status = 'error';
         }else{
           this.status = 'success';
           this.follows.push(followed);
         }
       },
       error =>{
         var errorMessage  = <any>error;
         if(errorMessage != null){
           this.status  = 'error';
         }
       });
  }

  unfollowUser(followed){
    console.log(followed)
    this._followService.deleteFollow(this.token,followed).subscribe(
      response =>{
        var search = this.follows.indexOf(followed);
        if(search != -1){
          this.follows.splice(search,1);
        }
      },
      error =>{
        var errorMessage  = <any>error;
        if(errorMessage != null){
          this.status  = 'error';
        }
      });
  }

}
