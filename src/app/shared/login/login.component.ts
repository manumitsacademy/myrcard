import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthenticationService,public router:Router,public fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }
  failedLogin=false;
  loginForm:FormGroup;
  ngOnInit() {
   
  }
  login(){

    this.authService.appLogin(this.loginForm,this.failedLogin);

  }
}
