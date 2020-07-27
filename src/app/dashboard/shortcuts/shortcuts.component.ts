import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication.service';
@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent {

  constructor(public aR:ActivatedRoute,public router: Router,private authenticationService:AuthenticationService) { 
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      this.headerTitle = e["url"].split('/')[2]
      if(e['url']=='/dashboard/transactionhistory'){
        this.divbg="purplebackground1";        
      }      
      else{
        this.divbg="bluebackground1";
        this.headerTitle = 'AccountSummary'
      }
    });
  }
  divbg="bluebackground1";
  headerTitle;
  signout(){
    this.authenticationService.signout();
  }
}
