import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalService, ModalModule } from 'ngx-bootstrap';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from 'src/app/core/account.service';
import accountsummary from 'src/app/core/model/mock-account-summary.json';
import transactions from 'src/app/core/model/mock-transaction-history.json';

import { AccountsummaryComponent } from './accountsummary.component';

describe('AccountsummaryComponent', () => {
  let component: AccountsummaryComponent;
  let fixture: ComponentFixture<AccountsummaryComponent>;
  let debugElement: DebugElement;
  let mockAccountService;
  let mockModalService;
  let accSummary;
  let trans;
  beforeEach(async(() => {
    accSummary = accountsummary;
    trans = transactions;
    mockAccountService = jasmine.createSpyObj(['getAccountSummary', 'getTransactionHistory']);
    mockModalService = jasmine.createSpyObj(['show']);

    TestBed.configureTestingModule({
      declarations: [AccountsummaryComponent],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
        { provide: BsModalService, useValue: mockModalService },
      ],
      imports: [ModalModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsummaryComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return account summary', () => {
    mockAccountService.getTransactionHistory.and.returnValue(of(trans));
    mockAccountService.getAccountSummary.and.returnValue(of(accSummary));
    fixture.componentInstance.accountSummary = accSummary;
    fixture.detectChanges();
    expect(trans.length).toBe(5);
    expect(accSummary.length).toBe(1);
  });

  it('clicking on info-icon should open info modal', () => {

    mockAccountService.getTransactionHistory.and.returnValue(of(trans));
    mockAccountService.getAccountSummary.and.returnValue(of(accSummary));
    fixture.detectChanges();
    const showModal = mockModalService.show.and.returnValue(of([]));
    const infoIcon = debugElement.query(By.css('img'));
    infoIcon.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(showModal).toHaveBeenCalled();
  });
});
