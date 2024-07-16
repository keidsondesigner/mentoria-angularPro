/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormPasswordComponent } from './auth-form-password.component';
import { AuthFormComponent } from '@ecommerce/auth-form';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthFormPasswordComponent', () => {
  let component: AuthFormPasswordComponent;
  let fixture: ComponentFixture<AuthFormPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormPasswordComponent, RouterTestingModule, NoopAnimationsModule],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    component.passwordFormControl.setValue('123456');
    fixture.detectChanges();
    expect(button.disabled).toBe(false);
  });

  it('should display required error message', () => {
    component.passwordFormControl.setValue('');
    component.passwordFormControl.markAsTouched();  // campo foi tocado
    fixture.detectChanges();

    const errorRequired = fixture.nativeElement.querySelector('[data-testid="required-error"]');
    expect(errorRequired).toBeTruthy();
  });

  it('should display password invalid error message', () => {
    component.passwordFormControl.setValue('1234');
    component.passwordFormControl.markAsTouched(); // campo foi tocado
    fixture.detectChanges();

    const errorPassword = fixture.nativeElement.querySelector('[data-testid="password-error"]');
    expect(errorPassword).toBeTruthy();
  });
});
