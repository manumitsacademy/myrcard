import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  updatePwdUrl = "https://revcard.herokuapp.com/api/v1/updatePassword";
  forgotPwdUrl = "https://revcard.herokuapp.com/api/v1/forgotPassword";  
  userUrl = "http://localhost:3000/users";

  credentials = {
    "email": "admin",
    "password": "password"
  };
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

  registerUser(user){
    this.http.post(this.userUrl,user).subscribe((res)=> {
      alert("Registration Successful");
      this.router.navigate(["/login"]);
    });    
  }

  appLogin(loginForm) {
    if (loginForm.email===this.credentials.email && loginForm.password===this.credentials.password) {
      this.router.navigate(["/dashboard"]);
    }
    else {
      alert("wrong credentials");
    }
    //this.router.navigate(["/dashboard"]);
    /* this.http.get<any>(this.userUrl + `?email=${loginForm.email}&password=${loginForm.password}`).subscribe((res)=>{
      if(res.length){
        this.router.navigate(["/dashboard"]); 
      }
      else{
        alert("wrong credentials");
      }
      
    }); */
    
    
  }

  updatePwd(cred){
    return this.http.post(this.updatePwdUrl,cred);
  }

  setPwd(pwd){
    return this.http.post(this.updatePwdUrl,pwd);
  }

  forgotPwd(pwd){
    const headers = { 'appName': 'REV_CARD' };
    return this.http.post(this.forgotPwdUrl,pwd,{headers});
  }

}
