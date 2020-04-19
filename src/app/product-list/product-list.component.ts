import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  product: any = {};
  term: any;              //search

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts().subscribe(response => {
      this.products = response;
      console.log(this.products)
    });

  }
getProducts():Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:5000/api/products/' + 'getProduct');


}
  postProducts(product: Product) {
    console.log(product.name, product.price)
    return this.http.post('http://localhost:5000/api/products/' + 'addProduct', product).subscribe();

  };

  addToCard(product: Product) {

    return this.http.put('http://localhost:5000/api/cart/' + product.id, product).subscribe();
  }


}
