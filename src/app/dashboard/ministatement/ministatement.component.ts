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
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res, (err, result) => {
        // console.log(result['ARRAY']['REVTRXN'])
        this.ministatement = result['ARRAY']['REVTRXN'].sort((a,b)=>{
          return a.TRXN[0].RECDATE[0]>b.TRXN[0].RECDATE[0]?-1:1;
        }).slice(0,10);  
        console.log(this.ministatement);
      });
    })
  }

}
