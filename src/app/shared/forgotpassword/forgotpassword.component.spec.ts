import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from 'src/app/core/authentication.service';

import { ForgotpasswordComponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;
  let debugElement: DebugElement;
  let mockAuthService;

  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj(['forgotPwd']);
    TestBed.configureTestingModule({
      declarations: [ForgotpasswordComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain reset password form', () => {
    const formElement = fixture.nativeElement.querySelector('#form');
    expect(formElement).toBeTruthy();
  });

  it('should contain "Reset Password" button', () => {
    const loginBtn = debugElement.query(By.css('.login-button'));
    expect(loginBtn).toBeTruthy();
  });

  it('reset password form should be empty by default', () => {
    const loginForm = fixture.componentInstance.forgotPasswordForm;
    expect(loginForm.valid).toBeFalsy();
  });

  it('clicking on "Reset Password" with empty fields should not reset', () => {
    const fgtPwd = mockAuthService.forgotPwd.and.returnValue(of([]));
    const loginBtn = debugElement.query(By.css('.login-button'));
    loginBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fgtPwd).not.toHaveBeenCalled();
  });

  it('clicking on "Reset Password" after filling form should call forgotPassword()', () => {
    const fgtPwd = mockAuthService.forgotPwd.and.returnValue(of([]));
    const email = "praveengclasses@gmail.com";
    const loginBtn = debugElement.query(By.css('.login-button'));
    component.forgotPasswordForm.controls.email.setValue(email);
    fixture.detectChanges();
    loginBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fgtPwd).toHaveBeenCalled();
  });
});
