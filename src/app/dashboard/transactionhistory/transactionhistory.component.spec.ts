import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalService, ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { of } from 'rxjs';
import { AccountService } from 'src/app/core/account.service';
import transactions from 'src/app/core/model/mock-transaction-history.json';

import { TransactionhistoryComponent } from './transactionhistory.component';

describe('TransactionhistoryComponent', () => {
  let component: TransactionhistoryComponent;
  let fixture: ComponentFixture<TransactionhistoryComponent>;
  let mockAccountService;
  let trans;
  //const fakeData = { id: 1, name: 'fakeName' };
  // const fakeAccountService = {
  //   getTransactionHistory: () => of([fakeData]),
  //   http: {}
  // } as any;
  // beforeEach(async(() => {
  //   // mockAccountService = jasmine.createSpyObj(['getTransactionHistory']);
  //   component = new TransactionhistoryComponent(fakeAccountService, null, null, null);

  //   TestBed.configureTestingModule({
  //     declarations: [TransactionhistoryComponent],
  //     providers: [
  //       // { provide: AccountService, useValue: mockAccountService },
  //       BsModalService
  //     ],
  //     imports: [BsDatepickerModule.forRoot(), ModalModule, RouterTestingModule, HttpClientTestingModule],
  //     schemas: [NO_ERRORS_SCHEMA]
  //   })
  //     .compileComponents();
  // }));

  beforeEach(async(() => {
    trans = transactions;
    mockAccountService = jasmine.createSpyObj(['getTransactionHistory']);
    // component = new TransactionhistoryComponent(null, null, null, null);

    TestBed.configureTestingModule({
      declarations: [TransactionhistoryComponent],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
        BsModalService
      ],
      imports: [BsDatepickerModule.forRoot(), ModalModule, RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionhistoryComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return transaction history', () => {
    mockAccountService.getTransactionHistory.and.returnValue(of(trans));
    fixture.componentInstance.currentTransactions = trans;
    fixture.detectChanges();
    expect(trans.length).toBe(5);
    console.log(fixture.componentInstance.currentTransactions);
    let abc = fixture.componentInstance.currentTransactions;
    console.log(abc[0]);
    // component.ngOnInit();
    // component.data.subscribe((res) => {
    //   console.log(res);
    //   expect(res).toEqual([fakeData]);
    // })
  });
});
