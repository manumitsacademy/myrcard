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
  spendingAvailability: number;
  constructor(public accountService:AccountService,public router:Router) {
    
   }
 
  transactionHistory:any;
  popoverInfo:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  currentPage:any;
  transactionHistoryLength=0;
  searchKey;
  ngOnInit() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.accountService.getTransactionHistory().subscribe((res)=>{
      res=JSON.parse(res);
      console.log("trxn his",res)
      this.transactionHistoryLength = res['Result'].array.RevTrxn.length;
      this.transactionHistory = res['Result'].array.RevTrxn.sort((a,b)=>{
        return a.trxn.recDate>b.trxn.recDate?-1:1;
      });  
      this.currentTransactions = this.transactionHistory.slice(0,20);
      // const parser = new xml2js.Parser({ strict: false, trim: true });
      // parser.parseString(res, (err, result) => {
      //   // console.log(result['ARRAY']['REVTRXN'])
      //   this.transactionHistoryLength = result['ARRAY']['REVTRXN'].length;
      //   this.transactionHistory = result['ARRAY']['REVTRXN'].sort((a,b)=>{
      //     return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
      //   });  
      //   this.currentTransactions = this.transactionHistory.slice(0,20);
      //   //(Payback Amount) revtrxn.fundingstmnt.paybackAmount        
      //   //(Paid Amount) revtrxn.fundingstmnt.totCollAmt
      //   //--------------------------------------m -------
      //   //(Remaining Amount) revtrxn.fundingstmnt.balToDone

      // });
    })
    // this.accountService.getSummary().subscribe((res)=>{
    //   const parser = new xml2js.Parser({ strict: false, trim: true });
    //   parser.parseString(res, (err, result) => {
    //     var spendingLimit=result.REVACCOUNTSUMMARY.LIMIT[0].MAXTRXNAMT[0];   
    //     var discountedBalance = result.REVACCOUNTSUMMARY.SUMMARY[0].UNCLEAREDBAL[0];
    //     var pendingAmount = result.REVACCOUNTSUMMARY.SUMMARY[0].PENDINGBAL[0]; 
    //     this.spendingAvailability = spendingLimit-discountedBalance-pendingAmount;         
    //   });
    // })
  }
  onDateChange($event){
    if(this.transactionHistory){
      this.currentTransactions=this.transactionHistory.filter((t,i)=>{  
        var tranTime = new Date(t.trxn.recDate).getTime();
        return tranTime>=$event[0].getTime() && tranTime<=$event[1].getTime();
      })
    }
    
  }
  //TRXN[0].RECDATE[0]
  searchHistory(){
    this.currentTransactions=this.transactionHistory.filter((t,i)=>{
      var temp = JSON.stringify(t).toUpperCase();
      return temp.includes(this.searchKey.toUpperCase())
    })
  }
  gotoaccount(){
    this.router.navigate(['/dashboard']);
  }
  pageChanged(event:PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentTransactions = this.transactionHistory.slice(startItem, endItem);
  }
}
