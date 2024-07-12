import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  // https://65009f9718c34dee0cd53786.mockapi.io/products?name=term

  protected baseUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`, {
      params: { name: term }
    });
  }
}
