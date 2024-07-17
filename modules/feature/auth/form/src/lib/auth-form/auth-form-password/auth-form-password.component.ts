/* eslint-disable no-console */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthFormComponent } from '../auth-form.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@ecommerce/auth-data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent implements OnInit {

  passwordFormControl!: FormControl<string | null>;

  // AuthFormComponent Injeção da referência do componente pai
  constructor(
    private authFormComponent: AuthFormComponent,
    private authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit() {
    console.log(this.authFormComponent.form.value);

    this.passwordFormControl = this.authFormComponent.form.controls.password

  }

  login() {
    console.log(this.passwordFormControl.value);

    // 1 - Preciso salvar o email no estado global
    const email = this.authFormComponent.form.controls.email.value;
    if (email !== null) {
      this.authService.setEmail(email);
      // 2 - e redirecionar para a proxima tela
      this.router.navigate(['/']);
    }
  }
}
