import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent {

  constructor(public aR:ActivatedRoute,public router: Router) { 
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if(e['url']=='/dashboard/transactionhistory'){
        this.divbg="purplebackground1";
      }
      else{
        this.divbg="bluebackground1";
      }
    });
  }
  divbg="bluebackground1";
}
