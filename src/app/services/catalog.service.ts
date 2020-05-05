import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../catalog/catalog/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/products/getProduct`);
  }

  addToCard(product: Product) {
    return this.http.put(`${this.apiUrl}/api/cart/${product.productId}`, product);
  }




}

