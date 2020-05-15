import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../Models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
 private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/products/getProduct`);
  }

  addToCard(product: Product) {
    return this.http.put(`${this.apiUrl}/api/cart/${product.productId}`, product);
  }




}

