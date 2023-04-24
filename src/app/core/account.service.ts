import { Injectable } from '@angular/core';
import transactions from 'src/app/core/model/mock-transaction-history.json';
import accountsummary from 'src/app/core/model/mock-account-summary.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccountSummary():any{
    return of(accountsummary);
  }
  getTransactionHistory():any{
    return of(transactions);
  }  
}
