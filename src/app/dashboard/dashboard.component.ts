import { Component, OnInit,TemplateRef,ViewChild   } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BsModalService, BsModalRef,ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
 
  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.childModal.hide();
  }
  constructor(public authService:AuthenticationService,public aR:ActivatedRoute,public router: Router,private modalService: BsModalService) { 
    this.authService.isTokenIdValid().subscribe((res)=>{
    })
    router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      if(e['url']=='/dashboard/transactionhistory'){
        this.divbg="purplebackground1";
        this.hexabg="purplebackground";
      }
      else{
        this.divbg="bluebackground1";
        this.hexabg="bluebackground";
      }
    });
  }
  divbg="bluebackground1";
  hexabg="bluebackground";
  ngOnInit() {    
    this.authService.isTokenIdValid().subscribe((res)=>{
    },()=>{window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    })
    this.authService.loggedIn();
    this.autologout();
  }
  ngOnDestroy(){
    //this.authService.loggedOut();
  }
  idletimeout:any;
  confirmBoxTimeout:any;
  autologout(){
        clearTimeout(this.idletimeout)
        this.idletimeout =  setTimeout(()=>{
                          this.childModal.show();
                          this.confirmBoxTimeout=setTimeout(()=>{
                              this.childModal.hide();
                              clearTimeout(this.idletimeout);  
                              window.localStorage.removeItem('token');
                              this.router.navigate(['/login'])                           
                            },1000*60*1);                              
                        },1000*60*4)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
    this.childModal.hide();
  }
 
  decline(): void {
    clearTimeout(this.confirmBoxTimeout)
    this.autologout();
    this.childModal.hide();
  }
}
