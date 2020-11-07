import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { HeaderComponent } from './header.component';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AccountService } from 'src/app/core/account.service';
import transactions from 'src/app/core/model/mock-transaction-history.json';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let mockAuthService;
  let mockAccountService;
  let trans;
  beforeEach(async(() => {
    trans = transactions;
    mockAccountService = jasmine.createSpyObj(['getTransactionHistory']);
    mockAuthService = jasmine.createSpyObj(['signout']);
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
        { provide: AuthenticationService, useValue: mockAuthService }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain signout option', () => {
    const signOut = debugElement.query(By.css('.sign-out'));
    expect(signOut).toBeTruthy();
  });

  it('should call signout() on clicking "Sign Out"', () => {
    mockAccountService.getTransactionHistory.and.returnValue(of(JSON.stringify(trans)));
    const callSignOut = mockAuthService.signout.and.returnValue([]);
    const signOut = debugElement.query(By.css('.sign-out'));
    signOut.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(callSignOut).toHaveBeenCalled();
  });

});
