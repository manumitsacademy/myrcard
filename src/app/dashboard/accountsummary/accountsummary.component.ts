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
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res, (err, result) => {
        // console.log(result['ARRAY']['REVTRXN'][0].TRXN[0].ACCTLAST4[0])
        this.accountLast=result['ARRAY']['REVTRXN'][0].TRXN[0].ACCTLAST4[0];        
      });
    })
    this.accountService.getAccountSummary().subscribe((res)=>{
        this.spendingLimit = res['Result'].RevAccountSummary.limit.maxTrxnAmt;   
        this.discountedBalance = res['Result'].RevAccountSummary.summary.currentBal;
        //
        this.pendingAmount = res['Result'].RevAccountSummary.summary.pendingBal; 
        this.spendingAvailability = this.spendingLimit-this.discountedBalance-this.pendingAmount; 
        var mn = res['Result'].RevAccountSummary.limit.maxNextAmt;
        var ma = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
        var sa = this.spendingAvailability;
        this.dailySpendLimit = (mn<ma)?(mn<sa?mn:sa):(ma<sa?ma:sa); 
    })
    // this.accountService.getSummary().subscribe((res)=>{
    //   const parser = new xml2js.Parser({ strict: false, trim: true });
    //   parser.parseString(res, (err, result) => {
    //     console.log("REVACCOUNTSUMMARY:",result)
    //     this.spendingLimit=result.REVACCOUNTSUMMARY.LIMIT[0].MAXTRXNAMT[0];   
    //     this.discountedBalance = result.REVACCOUNTSUMMARY.SUMMARY[0].CURRENTBAL[0];
    //     //
    //     this.pendingAmount = result.REVACCOUNTSUMMARY.SUMMARY[0].PENDINGBAL[0]; 
    //     this.spendingAvailability = this.spendingLimit-this.discountedBalance-this.pendingAmount; 
    //     var mn = result.REVACCOUNTSUMMARY.LIMIT[0].MAXNEXTAMT[0];
    //     var ma = result.REVACCOUNTSUMMARY.LIMIT[0].MAXTRXNAMT[0];
    //     var sa = this.spendingAvailability;
    //     this.dailySpendLimit = (mn<ma)?(mn<sa?mn:sa):(ma<sa?ma:sa); 
    //   });
    // })
  }

}

