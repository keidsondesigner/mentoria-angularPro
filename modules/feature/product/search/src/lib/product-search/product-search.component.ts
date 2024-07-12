import { ProductSearchService } from './../../../../../../data-access/product/src/lib/services/product-search/product-search.service';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, startWith, switchMap } from 'rxjs';

export type Product = {
  createdAt:   string;
  name:        string;
  price:       string;
  description: string;
  image:       string;
  id:          string;
  quantity:    number;
}

@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  searchControl = new FormControl('', { nonNullable: true });

  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit() {
    this.products$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      filter(value => value.length > 3),
      switchMap(value => this.productSearchService.searchByTerm(value)),
    );
  }
}
