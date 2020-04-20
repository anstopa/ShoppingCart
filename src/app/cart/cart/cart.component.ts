import { Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];
  total = 0;

  constructor(private cartService: CartService, private http: HttpClient) {

   }

  ngOnInit(): void {
    this.getCartProducts().subscribe(response => {
      this.products = response;
      console.log(this.products)
      this.getTotal();
    });

  }

  getTotal() {
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      console.log(this.products)
      this.total += this.products[i].price * this.products[i].quantity;
    }

  }
  deleteProduct(id: number) {

    this.cartService.deleteProduct(id).subscribe();
    location.reload();

  }
  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/cart/' + 'getCartProducts');
  }

}
