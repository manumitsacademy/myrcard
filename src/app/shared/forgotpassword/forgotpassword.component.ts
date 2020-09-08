import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  email:string;
  
  constructor(private router:Router,private fb:FormBuilder,private http:HttpClient) {     
    this.forgotPasswordForm = this.fb.group({
      email:[]
    })  
  }

  ngOnInit() {
    
  }
  forgotPassword(){
    const headers = { 'appName': 'REV_CARD' };
    this.http.post("https://revcard.herokuapp.com/api/v1/forgotPassword", 
    this.forgotPasswordForm.value,{headers})
    .subscribe(()=>{
      this.router.navigate([`${environment.baseUrl}login`])
    },()=>{alert("No account working with this email")})
  }
}
