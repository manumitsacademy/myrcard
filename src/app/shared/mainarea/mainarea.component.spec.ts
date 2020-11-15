import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/auth/auth.service';

import { MainareaComponent } from './mainarea.component';

describe('MainareaComponent', () => {
  let component: MainareaComponent;
  let fixture: ComponentFixture<MainareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainareaComponent],
      providers: [AuthService],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
