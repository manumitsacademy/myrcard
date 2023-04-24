import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  passwordForm:FormGroup;
  constructor(public authService:AuthenticationService,public router:Router,public fb:FormBuilder,private http:HttpClient) {
    this.passwordForm = this.fb.group({
      email:[window.localStorage.getItem('email')],
      currentPassword:[],
      newPassword:[],
    })
  }
  get newPassword(){
    return this.passwordForm.controls['newPassword'];
  }
  ngOnInit() {
   /*  this.authService.isTokenIdValid().subscribe((res)=>{
    },()=>{window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    }) */
  }
  updatePassword(){
    this.authService.updatePwd(this.passwordForm.value).subscribe(()=>{
      this.router.navigate([`${environment.baseUrl}login`])
    })
  }
}
