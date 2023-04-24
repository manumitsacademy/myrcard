import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    /* this.authService.isTokenIdValid().subscribe((res)=>{
    },()=>{window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    }) */
  }

}
