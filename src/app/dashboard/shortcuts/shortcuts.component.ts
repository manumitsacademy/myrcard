import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css'],
  animations: [
    trigger(
      'fadeAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            animate('0s',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ShortcutsComponent {
  isSearchEnabled = false;
  overview = true;
  requestLimit = false;
  requestCash = false;
  calendar = false;
  history = false;
  divbg = "bluebackground1";
  headerTitle;
  currentUrl;
  constructor(public aR: ActivatedRoute, public router: Router, private authenticationService: AuthenticationService) {
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      this.headerTitle = e["url"].split('/')[2];
      this.currentUrl = e['url'];

      if (e['url'] == '/dashboard/transactionhistory') {
        this.divbg = "purplebackground1";
        this.headerTitle = 'Transaction History';
        this.historyActive();
      }
      else {
        this.divbg = "bluebackground1";
        this.headerTitle = 'Account Overview';
        this.overviewActive();
        if (e['url'] == '/dashboard/default') {
          this.headerTitle = 'Request Limit Increase';
          this.requestLimitActive();
        }
        if (e['url'] == '/dashboard/request-cash') {
          this.headerTitle = 'Request Cash Draw';
          this.requestCashActive();
        }
        if (e['url'] == '/dashboard/payment-calendar') {
          this.headerTitle = 'Payment Calendar';
          this.calendarActive();
        }
      }
    });
  }
  overviewActive() {
    this.overview = true;
    this.requestLimit = false;
    this.requestCash = false;
    this.calendar = false;
    this.history = false;
  }
  requestLimitActive() {
    this.overview = false;
    this.requestLimit = true;
    this.requestCash = false;
    this.calendar = false;
    this.history = false;
  }
  requestCashActive() {
    this.overview = false;
    this.requestLimit = false;
    this.requestCash = true;
    this.calendar = false;
    this.history = false;
  }
  calendarActive() {
    this.overview = false;
    this.requestLimit = false;
    this.requestCash = false;
    this.calendar = true;
    this.history = false;
  }
  historyActive() {
    this.overview = false;
    this.requestLimit = false;
    this.requestCash = false;
    this.calendar = false;
    this.history = true;
  }
  signout() {
    this.authenticationService.signout();
  }
  enableSearch() {
    this.isSearchEnabled = true;
  }
  disableSearch() {
    this.isSearchEnabled = false;
  }
}
