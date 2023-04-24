import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [HeaderComponent, MainareaComponent, LoginComponent,
    FooterComponent,
    CreatepasswordComponent,
    ForgotpasswordComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),FormsModule,ReactiveFormsModule
  ],
  exports:[HeaderComponent,MainareaComponent,FooterComponent]
})
export class SharedModule { }
