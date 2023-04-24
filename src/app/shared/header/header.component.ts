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
  logInStatus = false;
  accountLast: any;
  legalName: any;
  constructor(public authService: AuthenticationService, public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res) => {
      //res = JSON.parse(res);
      this.legalName = res['Result'].array.RevTrxn[0].trxn.legalName;
    })
  }
  divbg = "bluebackground1";
  signout() {
    this.authService.signout();
  }
  changePassword() {
    this.router.navigate(['/dashboard/changepassword'])
  }
}
