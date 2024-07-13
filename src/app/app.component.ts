import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'modules/feature/src/lib/header/header.component';
import { ProductSearchComponent } from '@ecommerce/product-search';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    HeaderComponent,
    ProductSearchComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
