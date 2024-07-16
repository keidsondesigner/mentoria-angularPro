/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormEmailComponent } from './auth-form-email.component';
import { AuthFormComponent } from '@ecommerce/auth-form';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
