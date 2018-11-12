import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Follow } from '../../models/follow';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { GLOBAL } from '../../services/global';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ UserService, FollowService ]
})
export class ProfileComponent implements OnInit {
	public tittle: string;
	public user: User;
	public status: string;
	public identity;
	public token;
	public url;
	public stats;
	public followed;
  public following;


  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
  	private _followService: FollowService
  ) {
  	this.tittle = 'Profile';
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	this.url = GLOBAL.url;
    this.following = false;
    this.followed = false;

  }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage(){
  	this._route.params.subscribe(params =>{
  		let id = params['id'];
  		this.getUser(id);
  		this.getCounters(id);
  	});
  }

  getUser(id){
  	this._userService.getUser(id).subscribe(response =>{
  		if(response.user){
  			this.user = response.user;
        if(response.following){
          if(response.following._id){
            this.following = true;
          }else {
            this.following = false;
          }
        }else {
            this.following = false;
        }

        if(response.followed){
          if(response.followed._id){
            this.followed = true;
          }else {
            this.followed = false;
          }
        }else {
            this.followed = false;
        }

  		}else{
  			this.status = 'error' ;
  		}
  	},
  	error =>{
  		this._router.navigate(['/profile',this.identity._id]);
  	});
  }

  getCounters(id){
  	this._userService.getCounter(id).subscribe(
  		response =>{
  			this.stats = response;
  		},
  		error =>{
  			console.log(<any>error);
  		}
  	)
  }

  followUser(followed){
    var follow  = new Follow('',this.identity._id,followed);
    this._followService.addFollow(this.token, follow).subscribe(
      repsonse =>{
        this.following = true;

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  unfollowUser(followed){
    this._followService.deleteFollow(this.token, followed).subscribe(
      response =>{
        this.following = false;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  public followUserOver;

  mouseEnter(user_id){
    this.followUserOver = user_id;
    console.log("entering");
  }

  mouseLeave(){
    this.followUserOver = 0;
    console.log("GETTING OUT");
  }

}
