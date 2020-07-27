import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent implements OnInit {
  createPasswordForm: FormGroup;
  email:string;
  passwordToken:string;
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private fb:FormBuilder,private http:HttpClient) { 
    
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
    this.http.post("https://revcard.herokuapp.com/api/v1/updatePassword",this.createPasswordForm.value)
    .subscribe(()=>{
      this.router.navigate([`${environment.baseUrl}login`])
    })
  }
}
