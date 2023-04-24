import { Component, OnInit, ɵConsole } from '@angular/core';
import { TransactionStatus } from '../../core/model/transaction.status'
import { AccountService } from 'src/app/core/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {
  ministatement: any;
  isStatementLoaded = false;
  constructor(public accountService:AccountService,private authService:AuthenticationService,private router:Router) { }
  transactionHistory:any;
  transactionStatus=TransactionStatus;
  ngOnInit() {
   /*  this.authService.isTokenIdValid().subscribe((res)=>{
    },()=>{window.localStorage.removeItem('token');
    this.router.navigate(['/login']) }) */
    this.accountService.getTransactionHistory().subscribe((res)=>{
      //res=JSON.parse(res);
      this.ministatement = res['Result'].array.RevTrxn.sort((a,b)=>{
        return a.trxn.recDate>b.trxn.recDate?-1:1;
      }).slice(0,10);
      this.isStatementLoaded = true;
    })
  }

}
