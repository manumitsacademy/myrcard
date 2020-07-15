import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.http.get("/getAuthUrl").toPromise().then((res)=>{
      var loginurl=res['authUrl'];
      this.http.post(`${loginurl}v1/loginUser`,this.loginForm.value)
      .subscribe((res)=>{
        if(res){
          const headers = { 'Authorization': 'Bearer '+res['id_token'] }
          this.http.post(`${loginurl}v1/getUserDetails`,{email:this.loginForm['email']},{
            headers
          }).subscribe((details)=>{
            window.localStorage.setItem('oppId',details['app_metadata'].opportunityId)
            window.localStorage.setItem('token',JSON.stringify(res))
            this.router.navigate(["/dashboard"])
          })          
        }else{
          this.failedLogin=true;
        }
      })
    })    
  }
}
