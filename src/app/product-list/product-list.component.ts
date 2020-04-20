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
  products: Product[] =[];
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
  postProducts(products: Product) {
    console.log(products.name, products.price)
    return this.http.post('http://localhost:5000/api/products/' + 'addProduct', products).subscribe();

  };

  addToCard(products: Product) {

    return this.http.put('http://localhost:5000/api/cart/' + products.id, products).subscribe();
  }


}
