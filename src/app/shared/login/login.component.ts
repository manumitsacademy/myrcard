import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  isEmailFocussed = false;
  isPwdFocussed = false;
  constructor(public authService:AuthenticationService,public router:Router,public fb:FormBuilder) {

    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  failedLogin=false;
  loginForm:FormGroup;
  ngOnInit() {
    console.log();
  }
  emailOnFocus(){
    this.isEmailFocussed = true;
  }
  emailOnFocusOut(){
    this.isEmailFocussed = false;
  }
  pwdOnFocus(){
    this.isPwdFocussed = true;
  }
  pwdOnFocusOut(){
    this.isPwdFocussed = false;
  }
  login(){
    if(this.loginForm.valid){
    this.loggedIn = true;
    this.authService.appLogin(this.loginForm,this.failedLogin,this.loggedIn);
    }
    else{
      alert("Please enter required details");
    }
  }
}
