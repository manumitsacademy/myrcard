import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router,private http:HttpClient) { }
  loggedInEvent = new EventEmitter();
  loggedIn(){
    this.loggedInEvent.emit(true);
  }
  loggedOut(){    
    this.loggedInEvent.emit(false);
  }
  signout(){
    var res = window.confirm("Are you Sure!")
    if(res){
      window.localStorage.removeItem('token');
      this.router.navigate(['/login'])
    } 
  }
  isTokenIdValid(){
    //https://revcard.herokuapp.com/api/v1/validateToken
    const loginurl = window.localStorage.getItem('loginurl');
    const id_token = window.localStorage.getItem('id_token');
    const headers = { 'Authorization': 'Bearer '+id_token,"appName": "REV_CARD" }
    return this.http.get(`${loginurl}v1/validateToken`,{
            headers
          });
  }
}
