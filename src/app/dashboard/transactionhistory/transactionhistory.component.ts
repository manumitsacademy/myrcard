import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { AccountService } from 'src/app/core/account.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  currentTransactions: any;
  constructor(public accountService:AccountService,public router:Router) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }
 
  transactionHistory:any;
  popoverInfo:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  currentPage:any;
  transactionHistoryLength=0;
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res, (err, result) => {
        // console.log(result['ARRAY']['REVTRXN'])
        this.transactionHistoryLength = result['ARRAY']['REVTRXN'].length;
        this.transactionHistory = result['ARRAY']['REVTRXN'].sort((a,b)=>{
          return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
        });  
        this.currentTransactions = this.transactionHistory.slice(0,20);
        console.log("transactionHistory:::",this.transactionHistory);
      });
    })
  }
  gotoDefault(){
    this.router.navigate(['/dashboard/default']);
  }
  pageChanged(event:PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentTransactions = this.transactionHistory.slice(startItem, endItem);
  }
}
