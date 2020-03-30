import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
                          {path:'',component:LoginComponent},
                          {path:'login',component:LoginComponent},
                          {path: 'callback',component: CallbackComponent},
                          { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
