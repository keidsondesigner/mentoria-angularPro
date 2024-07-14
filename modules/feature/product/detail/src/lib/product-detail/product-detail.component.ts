/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/model/product.model';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productSearchService: ProductSearchService
  ) { }

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    map(params => params['id']), // Pegando id da rota
    switchMap(id => this.productSearchService.getById(id)) // Buscando pelo id
  )

}
