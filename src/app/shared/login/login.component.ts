import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  constructor(public authService:AuthService,public router:Router,public http:HttpClient,public fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }
  failedLogin=false;
  loginForm:FormGroup;
  loginurl:string;
  ngOnInit() {
   
  }
  login(){
    this.loggedIn = true;
    this.http.get(`${environment.baseUrl}getAuthUrl`).toPromise().then((res)=>{
      var loginurl=res['authUrl'];
      this.http.post(`${loginurl}v1/loginUser`,this.loginForm.value)
      .subscribe((res)=>{
        if(res){
          const headers = { 'Authorization': 'Bearer '+res['id_token'] };
          window.localStorage.setItem('loginurl',loginurl)
          window.localStorage.setItem('id_token',res['id_token'])
          this.http.post(`${loginurl}v1/getUserDetails`,{email:this.loginForm.controls['email'].value},{
            headers
          }).subscribe((details)=>{
            window.localStorage.setItem('oppId',details['app_metadata'].opportunityId)
            window.localStorage.setItem('email',details['email'])
            window.localStorage.setItem('token',JSON.stringify(res))
            
            this.router.navigate(["/dashboard"])
          })          
        }else{
          this.loggedIn = false;
          this.failedLogin=true;
        }
      },(err)=>{console.log("could not make a request....")})
    })    
  }
}
