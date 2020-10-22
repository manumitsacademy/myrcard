import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from 'src/app/core/account.service';
import transactions from 'src/app/core/model/mock-transaction-history.json';

import { MinistatementComponent } from './ministatement.component';

describe('MinistatementComponent', () => {
  let component: MinistatementComponent;
  let fixture: ComponentFixture<MinistatementComponent>;
  let mockAccountService;
  let trans;

  beforeEach(async(() => {
    trans = transactions;
    mockAccountService = jasmine.createSpyObj(['getTransactionHistory']);
    TestBed.configureTestingModule({
      declarations: [MinistatementComponent],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistatementComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return transaction history', () => {
    mockAccountService.getTransactionHistory.and.returnValue(of(trans));
    fixture.componentInstance.transactionHistory = trans;
    fixture.detectChanges();
    expect(trans.length).toBe(5);
    console.log(fixture.componentInstance.transactionHistory);
    let abc = fixture.componentInstance.transactionHistory;
    console.log(abc[0]);
    // component.ngOnInit();
    // component.data.subscribe((res) => {
    //   console.log(res);
    //   expect(res).toEqual([fakeData]);
    // })
  });
});
