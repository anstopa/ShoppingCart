import {Injectable} from '@angular/core';
import {Product} from '../catalog/catalog/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.apiUrl}/api/cart/${id}`);
  }

  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/cart/getCartProducts`);
  }

}
