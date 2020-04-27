import {Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChange, SimpleChanges} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {Product} from 'src/app/product';
import {element} from 'protractor';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];
  public product: Product;


  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
this.getCartProduct()

  }
get total(){
    return this.products.map(item => {
     return  item.quantity * item.price;
    }).reduce((acc, item) => acc + item, 0);
}

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id).subscribe();
    setTimeout(() => this.getCartProduct(), 50);
  }
  getCartProduct(){
    this.cartService.getCartProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);
    });
  }

}
