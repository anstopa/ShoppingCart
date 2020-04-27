import {Injectable} from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// @ts-ignore
import config from '../../assets/configs/config.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = config.urls.appUrl;
  port = config.urls.port;

  constructor(private http: HttpClient) {
  }

  deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.url}${this.port}/api/card/${id}`);
  }
  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}${this.port}/api/cart/getCartProducts`);
  }

}
