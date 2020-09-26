import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  updatePwdUrl = "https://revcard.herokuapp.com/api/v1/updatePassword";
  forgotPwdUrl = "https://revcard.herokuapp.com/api/v1/forgotPassword";
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
  appLogin(cred,failed,loggedIn){
    this.http.get(`${environment.baseUrl}getAuthUrl`).toPromise().then((res)=>{
      var loginurl=res['authUrl'];

      this.http.post(`${loginurl}v1/loginUser`,cred.value)
      .subscribe((res)=>{
        console.log(res);
        if(res){
          const headers = { 'Authorization': 'Bearer '+res['id_token'] };
          window.localStorage.setItem('loginurl',loginurl)
          window.localStorage.setItem('id_token',res['id_token'])
          this.http.post(`${loginurl}v1/getUserDetails`,{email:cred.controls['email'].value},{
            headers
          }).subscribe((details)=>{
            console.log(details)
            window.localStorage.setItem('oppId',details['app_metadata'].opportunityId)
            window.localStorage.setItem('email',details['email'])
            window.localStorage.setItem('token',JSON.stringify(res))
            
            this.router.navigate(["/dashboard"])
          })          
        }else{
          failed=true;
          loggedIn = false;
        }
      },(err)=>{console.log(err)})
    })
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
