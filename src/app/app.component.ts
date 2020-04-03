import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revcarddev';
  constructor(public router:Router){}
  autologout(){
    setTimeout(()=>{
      window.localStorage.removeItem('token');
      this.router.navigate(['/login'])
    },1000*60*5)
  }
}
