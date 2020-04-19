import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
products: Product[];
url = "http://localhost:5000/api/cart"
// addToCard(product){
//   this.products.push(product);
// }

getCartProducts(){
  return this.products;
}
clearCart(){
  this.products = [];
  return this.products;
}


  constructor(private http: HttpClient) { }

  deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.url}/${id}`);
  }

  
}
