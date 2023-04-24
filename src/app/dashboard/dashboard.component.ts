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
  }
  
  ngOnInit() {
    this.authService.loggedIn();    
  }
  
  idletimeout: any;
  confirmBoxTimeout: any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  
}
