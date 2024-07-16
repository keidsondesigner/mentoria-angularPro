/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { CartService, ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>

  constructor(
    private activatedRoute: ActivatedRoute,
    private productSearchService: ProductSearchService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.product$ = this.activatedRoute.params.pipe(
      map(params => params['id']), // Pegando id da rota
      switchMap(id => this.productSearchService.getById(id)) // Buscando pelo id
    )
  }
}
