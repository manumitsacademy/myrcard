import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  email:string;
  
  constructor(public authService:AuthenticationService,private router:Router,private fb:FormBuilder,private http:HttpClient) {     
    this.forgotPasswordForm = this.fb.group({
      email:[]
    })  
  }

  ngOnInit() {
    
  }
  forgotPassword(){
    this.authService.forgotPwd(this.forgotPasswordForm.value)
    .subscribe(()=>{
      this.router.navigate([`${environment.baseUrl}login`])
    },()=>{alert("No account working with this email")})
  }
}
