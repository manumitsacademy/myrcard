import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/core/authentication.service';

import { ShortcutsComponent } from './shortcuts.component';

describe('ShortcutsComponent', () => {
    let component: ShortcutsComponent;
    let fixture: ComponentFixture<ShortcutsComponent>;
    let mockAuthService;
    beforeEach(async(() => {
        mockAuthService = jasmine.createSpyObj(['signOut']);
        TestBed.configureTestingModule({
            declarations: [ShortcutsComponent],
            providers: [
                { provide: AuthenticationService, useValue: mockAuthService },

            ],
            imports: [RouterTestingModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ShortcutsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
