import {Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChange, SimpleChanges} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {Product} from 'src/app/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: Product[];
  public product: Product;


  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);
      // this.getTotal();
    });

  }

  get total() {
    this.products.reduce(function(prev, cur) {
      return prev + (cur.price * cur.quantity);
    }, 0);
    return this.total;
  }


  // getTotal() {
  //   this.total = 0;
  //   for (let i = 0; i < this.products.length; i++) {
  //     console.log(this.products);
  //     this.total += this.products[i].price * this.products[i].quantity;
  //   }

  // }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id).subscribe();
    location.reload();
  }

}
