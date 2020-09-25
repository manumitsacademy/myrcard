import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent implements OnInit {
  createPasswordForm: FormGroup;
  email:string;
  passwordToken:string;
  constructor(public authService:AuthenticationService,private router:Router,private activatedRouter:ActivatedRoute,private fb:FormBuilder) { 
    
    this.createPasswordForm = this.fb.group({
      email:[],
      password:[],
      passwordToken:[]
    })  
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(({email,passwordToken})=>{
      this.email=email;
      this.passwordToken = passwordToken;
    })
  }
  setPassword(){
    this.authService.setPwd(this.createPasswordForm.value)
    .subscribe(()=>{
      this.router.navigate([`${environment.baseUrl}login`])
    })
  }
}
