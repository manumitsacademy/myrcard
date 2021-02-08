import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
//import { AccountService } from '../../core/account.service';
import transactions from 'src/app/core/model/mock-transaction-history.json';

import * as xml2js from 'xml2js';
import { RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logInStatus = false;
  accountLast: any;
  legalName: any;
  constructor(public authService: AuthenticationService, public router: Router) {
    // this.authService.loggedInEvent.subscribe((logInStatus) => {
    //   this.logInStatus = logInStatus;
    // })
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if (e['url'] == '/dashboard/transactionhistory') {
        this.divbg = "purplebackground1";
      }
      else {
        this.divbg = "bluebackground1";
      }
    });
  }

  ngOnInit() {
    // this.accountService.getTransactionHistory().subscribe((res) => {
    //   res = JSON.parse(res);
    this.legalName = transactions.Result.array.RevTrxn[0].trxn.legalName;
    // })
  }
  divbg = "bluebackground1";
  signout() {
    this.authService.signout();
  }
  changePassword() {
    this.router.navigate(['/dashboard/changepassword'])
  }
}
