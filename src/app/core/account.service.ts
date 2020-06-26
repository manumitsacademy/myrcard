import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http:HttpClient) { }
  getSummary(){
    return this.http.get("/assets/summary.xml",{  
      headers: new HttpHeaders()  
        .set('Content-Type', 'text/xml')  
        .append('Access-Control-Allow-Methods', 'GET')  
        .append('Access-Control-Allow-Origin', '*')  
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
      responseType: 'text'  
    })
  }
  getAccountSummary(){
    return this.http.get(`${environment.soapBase}accountsummary`)
  }
  getTransactionHistory(){
    return this.http.get(`${environment.soapBase}transactionhistory`)
  }
  // getTransactionHistory(){
  //   return this.http.get("/assets/history.xml",{  
  //     headers: new HttpHeaders()  
  //       .set('Content-Type', 'text/xml')  
  //       .append('Access-Control-Allow-Methods', 'GET')  
  //       .append('Access-Control-Allow-Origin', '*')  
  //       .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
  //     responseType: 'text'  
  //   })
  // }
}
