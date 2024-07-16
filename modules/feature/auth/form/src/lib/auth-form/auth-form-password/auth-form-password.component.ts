/* eslint-disable no-console */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthFormComponent } from '../auth-form.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  constructor(private authFormComponent: AuthFormComponent) {}
  
  ngOnInit() {
    console.log(this.authFormComponent.form.value);

    this.passwordFormControl = this.authFormComponent.form.controls.password
  }
}
