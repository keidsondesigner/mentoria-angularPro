/* eslint-disable no-console */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './../auth-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent implements OnInit {
  
  // AuthFormComponent Injeção da referência do componente pai
  constructor(private authFormComponent: AuthFormComponent) {}
  
  ngOnInit() {
    console.log(this.authFormComponent.form.value);
  }
}