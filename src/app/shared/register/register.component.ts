import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  isUnameFocussed = false;
  isEmailFocussed = false;
  isPwdFocussed = false;
  registerForm: FormGroup;
  constructor(public fb: FormBuilder, private authService:AuthenticationService) {
    this.registerForm = this.fb.group({
      uname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  unameOnFocus(){
    this.isUnameFocussed = true;
  }

  unameOnFocusOut(){
    this.isUnameFocussed = false;
  }

  emailOnFocus() {
    this.isEmailFocussed = true;
  }
  emailOnFocusOut() {
    this.isEmailFocussed = false;
  }
  pwdOnFocus() {
    this.isPwdFocussed = true;
  }
  pwdOnFocusOut() {
    this.isPwdFocussed = false;
  }

  register(){
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value);
    }
    else {
      alert("Please fill up all the fields");
    }
  }
}
