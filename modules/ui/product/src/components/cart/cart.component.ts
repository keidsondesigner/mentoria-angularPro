import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() quantity!: number | null;
}
