import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from 'src/app/core/authentication.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let mockAuthService;
  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj(['appLogin']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should abc', () => {
  //   spyOn(component, 'emailOnFocus');
  //   component.ngOnInit();

  //   expect(component.emailOnFocus).toHaveBeenCalled();
  // });

  it('should contain login form', () => {
    const formElement = fixture.nativeElement.querySelector('#form');
    expect(formElement).toBeTruthy();
  });

  it('should contain login button', () => {
    const loginBtn = debugElement.query(By.css('.login-button'));
    expect(loginBtn).toBeTruthy();
  });

  it('login form should be empty by default', () => {
    const loginForm = fixture.componentInstance.loginForm;
    expect(loginForm.valid).toBeFalsy();
  });

  it('clicking on "Login" with empty fields should not login', () => {
    const mockLogin = mockAuthService.appLogin.and.returnValue(of([]));
    const loginBtn = debugElement.query(By.css('.login-button'));
    loginBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('clicking on "Login" after filling form should login', () => {

    const mockLogin = mockAuthService.appLogin.and.returnValue(of([]));
    const email = "praveengclasses@gmail.com";
    const pwd = "qwerty";
    const loginBtn = debugElement.query(By.css('.login-button'));
    component.loginForm.controls.email.setValue(email);
    component.loginForm.controls.password.setValue(pwd);
    fixture.detectChanges();
    loginBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(mockLogin).toHaveBeenCalled();
  });

});
