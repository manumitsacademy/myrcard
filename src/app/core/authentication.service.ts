import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }
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
}
