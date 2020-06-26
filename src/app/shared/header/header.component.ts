import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { AccountService } from '../../core/account.service';
import * as xml2js from 'xml2js';
import { RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logInStatus=false;
  accountLast: any;
  legalName: any;
  constructor(public authService:AuthenticationService,public accountService:AccountService,public router: Router) {
    this.authService.loggedInEvent.subscribe((logInStatus)=>{
      this.logInStatus=logInStatus;
    })
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

  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      console.log("header ",res)
      this.legalName = res['Result'].array.RevTrxn[0].trxn.legalName;  
      // const parser = new xml2js.Parser({ strict: false, trim: true });
      // parser.parseString(res, (err, result) => {
      //   this.legalName=result['ARRAY']['REVTRXN'][0].TRXN[0].LEGALNAME[0];        
      // });
    })
  }
  divbg="bluebackground1";
  signout(){
    var res = window.confirm("Do you want to Signout")
    if(res){
      window.localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }
   
  }
}
