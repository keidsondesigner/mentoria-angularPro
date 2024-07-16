import { AsyncPipe } from '@angular/common';
import { CartService } from '@ecommerce/product-data-access';
import { CartComponent } from './../../modules/ui/product/src/components/cart/cart.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'modules/feature/src/lib/header/header.component';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
    AsyncPipe
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public cartService: CartService) {}
}
