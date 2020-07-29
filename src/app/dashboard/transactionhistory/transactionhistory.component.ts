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
   //latest available transaction date to latest avaible 
  transactionHistory:any;
  transactionHistoryLength=0;
  filteredTransactions:any;
  filteredTransactionsLength=0;
  itemsPerPage=20;
  popoverInfo:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate:Date;
  currentPage:any;
  selectedDateRange:any;
  searchKey;
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res)=>{
      res=JSON.parse(res);
      this.transactionHistory = res['Result'].array.RevTrxn.sort((a,b)=>{
        return a.trxn.recDate>b.trxn.recDate?-1:1;
      });  
      this.filteredTransactions = this.transactionHistory;
      this.filteredTransactionsLength = this.filteredTransactions.length;
      this.currentTransactions = this.transactionHistory.slice(0,this.itemsPerPage);
      this.maxDate = new Date(this.filteredTransactions[0].trxn.recDate);
      this.minDate= new Date(this.maxDate.getTime()-7*24*60*60*1000);
      this.bsRangeValue = [this.minDate, this.maxDate];
      this.selectedDateRange=this.bsRangeValue;
      this.onDateChange(this.selectedDateRange); 
    })  
  }
  onDateChange(dateRange?: undefined){
    if(dateRange){this.selectedDateRange = dateRange;}
    if(this.transactionHistory){
      this.filteredTransactions=this.transactionHistory.filter((t,i)=>{  
        var tranTime = new Date(t.trxn.recDate).getTime();
        return tranTime>=this.selectedDateRange[0].getTime() && tranTime<=this.selectedDateRange[1].getTime();
      })
      this.currentTransactions = this.filteredTransactions.slice(0,this.itemsPerPage);
    }    
  }
  searchHistory(){
    if(this.searchKey!='' && this.searchKey!=null){
      this.filteredTransactions=this.filteredTransactions.filter((t,i)=>{
        var temp = JSON.stringify(t).toUpperCase();
        return temp.includes(this.searchKey.toUpperCase())
      })
    }
    else{
      this.onDateChange()
    }    
    this.currentTransactions = this.filteredTransactions.slice(0,this.itemsPerPage);
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
