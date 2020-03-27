import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { AccountService } from '../../core/account.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logInStatus=false;
  accountLast: any;
  username: any;
  constructor(public authService:AuthenticationService,public accountService:AccountService) {
    this.authService.loggedInEvent.subscribe((logInStatus)=>{
      this.logInStatus=logInStatus;
    })
   }

  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res, (err, result) => {
        console.log(result['ARRAY']['REVTRXN'][0].TRXN[0].ACCTLAST4[0])
        this.username=result['ARRAY']['REVTRXN'][0].TRXN[0].USERNAME[0];        
      });
    })
  }

}
