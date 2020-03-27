import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthenticationService,public aR:ActivatedRoute,public router: Router) { 
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if(e['url']=='/dashboard/transactionhistory'){
        this.divbg="purplebackground1";
        this.hexabg="purplebackground";
      }
      else{
        this.divbg="bluebackground1";
        this.hexabg="bluebackground";
      }
    });
  }
  divbg="bluebackground1";
  hexabg="bluebackground";
  ngOnInit() {    
    this.authService.loggedIn();
    
  }
  ngOnDestroy(){
    this.authService.loggedOut();
  }
}
