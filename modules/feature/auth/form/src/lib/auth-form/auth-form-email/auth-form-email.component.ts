/* eslint-disable no-console */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './../auth-form.component';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule],
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