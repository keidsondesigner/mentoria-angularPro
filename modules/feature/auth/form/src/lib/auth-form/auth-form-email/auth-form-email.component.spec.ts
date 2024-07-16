/* eslint-disable @nx/enforce-module-boundaries */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormEmailComponent } from './auth-form-email.component';
import { AuthFormComponent } from '@ecommerce/auth-form';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent, RouterTestingModule, NoopAnimationsModule],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    component.emailFormControl.setValue('email-valido@gmail.com');
    fixture.detectChanges();
    expect(button.disabled).toBe(false);
  });

  it('should display required error message', () => {
    component.emailFormControl.setValue('');
    component.emailFormControl.markAsTouched();  // campo foi tocado
    fixture.detectChanges();

    const errorRequired = fixture.nativeElement.querySelector('[data-testid="required-error"]');
    expect(errorRequired).toBeTruthy();
  });

  it('should display email invalid error message', () => {
    component.emailFormControl.setValue('email-invalido');
    component.emailFormControl.markAsTouched(); // campo foi tocado
    fixture.detectChanges();

    const errorEmail = fixture.nativeElement.querySelector('[data-testid="email-error"]');
    expect(errorEmail).toBeTruthy();
  });
});
