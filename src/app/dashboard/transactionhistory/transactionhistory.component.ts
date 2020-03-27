import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { AccountService } from 'src/app/core/account.service';
@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  constructor(public accountService:AccountService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }
 
  transactionHistory:any;
  popoverInfo:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res, (err, result) => {
        // console.log(result['ARRAY']['REVTRXN'])
        this.transactionHistory = result['ARRAY']['REVTRXN'].sort((a,b)=>{
          return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
        });  
        console.log("transactionHistory:::",this.transactionHistory);
      });
    })
  }
  pageChanged(){
    console.log("HIHIHI")
  }
}
