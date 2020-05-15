import {Component, OnInit} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {CartProduct} from '../../Models/cart.models';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct: CartProduct[] = [];


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getCartProduct();

  }

  get total() {
    return this.cartProduct.map(item => {
      return item.quantity * item.price;
    }).reduce((acc, item) => acc + item, 0);
  }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id).subscribe(
      () => this.getCartProduct()
    );
  }

  getCartProduct() {
    this.cartService.getCartProducts().subscribe(response => {
      this.cartProduct = response;
    });
  }

}
