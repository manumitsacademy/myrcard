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
  
  loginForm:FormGroup;
  ngOnInit() {
    
  }
  login(){
    this.http.post("https://revcard.herokuapp.com/api/v1/loginUser",this.loginForm.value)
    .subscribe((res)=>{console.log("Login:::::::",res)})
  }
}
