import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { Observable } from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[]>

  constructor(private recommendedProductsService: RecommendedProductsService) {}
  
  ngOnInit() {
    this.products$ = this.recommendedProductsService.getProducts();
  }
}
