import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/core/account.service';
import * as xml2js from 'xml2js';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit, OnDestroy {
  ministatement: any;
  accountLast: any;
  spendingLimit: any;
  discountedBalance: any;
  pendingAmount: any;
  spendingAvailability: any;
  dailySpendLimit: any;
  modalRef: BsModalRef;
  modelTitle: string;
  isCollapsed = true;
  paynowDiscountModelContent: string = 'Revenued will sell back to you the percentage of receivables previously purchased by them at the "Est Payoff" rate. This is the amount that you will save by purchasing back your receivables today.';
  pendingTransactionModelContent: string = "This amount represents the cumulative total of all  transactions that are currently awaiting Confirmation by Revenued.";
  spendingAvailabilityModelContent: string = "This is the total amount of funds currently available for your use. This amount is calculated by subtracting the PayNow Discount and any Pending Transactions from your total Spending Limit.";
  modelContent: any;
  constructor(public accountService: AccountService, private modalService: BsModalService,) { }
  transactionHistory: any;
  ngOnInit() {
    this.accountService.getTransactionHistory().subscribe((res) => {
      this.accountLast = res['Result'].array.RevTrxn[0].trxn.acctLast4;
    })
    this.accountService.getAccountSummary().subscribe((res) => {
      this.spendingLimit = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
      this.discountedBalance = res['Result'].RevAccountSummary.summary.currentBal;
      this.pendingAmount = res['Result'].RevAccountSummary.summary.pendingBal;
      this.spendingAvailability = this.spendingLimit - this.discountedBalance - this.pendingAmount;
      var mn = res['Result'].RevAccountSummary.limit.maxNextAmt;
      var ma = res['Result'].RevAccountSummary.limit.maxTrxnAmt;
      var sa = this.spendingAvailability;
      this.dailySpendLimit = (mn < ma) ? (mn < sa ? mn : sa) : (ma < sa ? ma : sa);
    })
  }

  openModal(template: TemplateRef<any>, title, description) {
    this.modelTitle = title;
    this.modelContent = description;
    this.modalRef = this.modalService.show(template, { class: 'right-modal' });
  }

  expand() {
    this.isCollapsed = false;
  }
  collapse() {
    this.isCollapsed = true;
  }
  ngOnDestroy() {
    this.modalService.hide(1);
  }

}

