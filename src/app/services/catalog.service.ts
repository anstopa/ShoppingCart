import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import config from '../../assets/configs/config.json';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url = config.urls.appUrl;
  port = config.urls.port;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}${this.port}/api/products/getProduct`);
  }

  postProducts(products: Product) {
    return this.http.post(`${this.url}${this.port}/api/products/addProduct`, products);
  }

  addToCard(products: Product) {
    return this.http.put(`${this.url}${this.port}/api/cart/products.id`, products);
  }


}

