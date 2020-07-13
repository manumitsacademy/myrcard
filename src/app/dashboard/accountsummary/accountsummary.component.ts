import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/account.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
  ministatement: any;
  accountLast: any;
  spendingLimit: any;
  discountedBalance: any;
  pendingAmount: any;
  spendingAvailability: any;
  dailySpendLimit: any;
  constructor(public accountService:AccountService) { }
  transactionHistory:any;
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      
      this.accountLast=res['Result'].array.RevTrxn[0].trxn.acctLast4;        

    })
    this.accountService.getAccountSummary().subscribe((res)=>{
        res=JSON.parse(res);
        this.spendingLimit = res['Result'].RevAccountSummary.limit.maxTrxnAmt;   
        this.discountedBalance = res['Result'].RevAccountSummary.summary.currentBal;
        
        this.pendingAmount = res['Result'].RevAccountSummary.summary.pendingBal; 
        this.spendingAvailability = this.spendingLimit-this.discountedBalance-this.pendingAmount; 
        var mn = res['Result'].RevAccountSummary.limit.maxNextAmt;
        var ma = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
        var sa = this.spendingAvailability;
        this.dailySpendLimit = (mn<ma)?(mn<sa?mn:sa):(ma<sa?ma:sa); 
    })
   
  }

}

