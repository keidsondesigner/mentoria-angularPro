import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendedProductsService {
// https://65009f9718c34dee0cd53786.mockapi.io/products?name=term

readonly baseUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.baseUrl}/products`, {
    params: { 
      page: 1,
      limit: 6
    }
  });
}}
