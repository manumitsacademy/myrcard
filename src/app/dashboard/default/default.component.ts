import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    /* this.authService.isTokenIdValid().subscribe((res)=>{
    },()=>{window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    }) */
  }

}
