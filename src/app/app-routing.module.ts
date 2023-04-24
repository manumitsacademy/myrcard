import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CreatepasswordComponent } from './shared/createpassword/createpassword.component';
import { ForgotpasswordComponent } from './shared/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './shared/register/register.component';


const routes: Routes = [
                          {path:'',component:LoginComponent},
                          {path:'login',component:LoginComponent},
                          {path: 'register', component: RegisterComponent},
                          {path:'createpassword',component:CreatepasswordComponent},
                          {path:'forgotpassword',component:ForgotpasswordComponent},
                          { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
