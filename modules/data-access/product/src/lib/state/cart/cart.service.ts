import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  // transformos os produtos em uma quantidade
  productQuantity$ = this.cartSubject.pipe(
    map(products => products.length)
  )

  constructor() { }

  addToCart(product: Product) {
    this.cartSubject.next([...this.cartSubject.getValue(), product]); // ...produto atual, mais novo produto

    console.log(this.cartSubject.getValue())
  }
}
