import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { AccountService } from 'src/app/core/account.service';
@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {
  ministatement: any;

  constructor(public accountService:AccountService) { }
  transactionHistory:any;
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      console.log(res)
      this.ministatement = res['Result'].array.RevTrxn.sort((a,b)=>{
        return a.trxn.recDate>b.trxn.recDate?-1:1;
      }).slice(0,10)
      // this.ministatement = result['ARRAY']['REVTRXN'].sort((a,b)=>{
      //   return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
      // }).slice(0,10);

      // const parser = new xml2js.Parser({ strict: false, trim: true });
      // parser.parseString(res, (err, result) => {
      //   // console.log(result['ARRAY']['REVTRXN'])
      //   this.ministatement = result['ARRAY']['REVTRXN'].sort((a,b)=>{
      //     return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
      //   }).slice(0,10);  
      // });
    })
  }

}

// this.spendingLimit = res['Result'].RevAccountSummary.limit.maxTrxnAmt;   
// this.discountedBalance = res['Result'].RevAccountSummary.summary.currentBal;
// this.pendingAmount = res['Result'].RevAccountSummary.summary.pendingBal; 
// this.spendingAvailability = this.spendingLimit-this.discountedBalance-this.pendingAmount; 
// var mn = res['Result'].RevAccountSummary.limit.maxNextAmt;
// var ma = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
// var sa = this.spendingAvailability;
// this.dailySpendLimit = (mn<ma)?(mn<sa?mn:sa):(ma<sa?ma:sa); 