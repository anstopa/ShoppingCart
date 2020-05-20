import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../Models/cart.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${environment.apiUrl}/api/cart/${id}`);
  }

  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/api/cart/getCartProducts`
    );
  }
}
