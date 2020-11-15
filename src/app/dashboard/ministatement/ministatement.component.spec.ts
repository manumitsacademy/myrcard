import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from 'src/app/core/account.service';
import transactions from 'src/app/core/model/mock-transaction-history.json';

import { MinistatementComponent } from './ministatement.component';

describe('MinistatementComponent', () => {
  let component: MinistatementComponent;
  let fixture: ComponentFixture<MinistatementComponent>;
  let mockAccountService;
  let trans;
  let debugElement: DebugElement;

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
    debugElement = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('recent transactions table should be present', () => {
    const table = debugElement.query(By.css('.transac-table'));
    expect(table).toBeTruthy();
  });

  it('should return transaction history', () => {
    mockAccountService.getTransactionHistory.and.returnValue(of(JSON.stringify(trans)));
    fixture.componentInstance.transactionHistory = trans;
    fixture.detectChanges();
    expect(trans.Result.array.RevTrxn.length).toBe(5);
  });
});
