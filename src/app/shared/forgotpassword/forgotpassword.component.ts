import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  email: string;
  isFieldFocussed = false;
  constructor(public authService: AuthenticationService, private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit() {

  }
  forgotPwdOnFocus() {
    this.isFieldFocussed = true;
  }
  forgotPwdOnFocusOut() {
    this.isFieldFocussed = false;
  }
  forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.authService.forgotPwd(this.forgotPasswordForm.value)
        .subscribe(() => {
          this.router.navigate([`${environment.baseUrl}login`])
        }, () => { alert("No account working with this email") })
    }
    else{
      alert("Please enter your email to proceed");
    }
  }
}
