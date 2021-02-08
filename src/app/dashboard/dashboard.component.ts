import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  @ViewChild('childModal', { static: true }) childModalRef: TemplateRef<any>;

  showChildModal(): void {
    this.modalRef = this.modalService.show(this.childModalRef, {
      class: 'modal-sm',
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  hideChildModal(): void {
    this.modalRef.hide();
  }
  constructor(public authService: AuthenticationService, public aR: ActivatedRoute, public router: Router, private modalService: BsModalService) {
    // this.authService.isTokenIdValid().subscribe((res) => {
    // })
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if (e['url'] == '/dashboard/transactionhistory') {
        this.divbg = "purplebackground1";
        this.hexabg = "purplebackground";
      }
      else {
        this.divbg = "bluebackground1 bg-sub";
        this.hexabg = "bluebackground";
      }
    });
  }
  divbg = "bluebackground1 bg-sub";
  hexabg = "bluebackground";
  ngOnInit() {
    // this.authService.isTokenIdValid().subscribe((res) => {
    // }, () => {
    // window.localStorage.removeItem('token');
    // this.router.navigate(['/login'])
    // // })
    this.authService.loggedIn();
    this.autologout();
  }
  ngOnDestroy() {
    //this.authService.loggedOut();
  }
  idletimeout: any;
  confirmBoxTimeout: any;
  autologout() {
    clearTimeout(this.idletimeout)
    this.idletimeout = setTimeout(() => {
      this.showChildModal();
      this.confirmBoxTimeout = setTimeout(() => {
        this.hideChildModal();
        clearTimeout(this.idletimeout);
        window.localStorage.removeItem('token');
        this.router.navigate(['/login'])
      }, 1000 * 60 * 1);
    }, 1000 * 60 * 4)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    this.hideChildModal();
  }

  decline(): void {
    clearTimeout(this.confirmBoxTimeout)
    this.autologout();
    this.hideChildModal();
  }
}
