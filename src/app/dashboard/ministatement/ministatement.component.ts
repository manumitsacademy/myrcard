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
      res=JSON.parse(res);
      this.ministatement = res['Result'].array.RevTrxn.sort((a,b)=>{
        return a.trxn.recDate>b.trxn.recDate?-1:1;
      }).slice(0,10)
      
    })
  }

}
