import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CatalogService } from '../services/catalog.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  cartProduct: Product[] = [];
  searchText: string;

  constructor(private catalogService: CatalogService, private castService: CartService) {
  }

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);
      this.getCartProduct();
      // this.isInCart();
    });

  }

  addToCard(product) {
    this.product = product;
    this.catalogService.addToCard(this.product).subscribe();
    setTimeout(() => this.getCartProduct(), 50);
    this.isInCart(product);
  }

  get counter() {
    if (this.cartProduct.length === 0) {
      return 0;
    }
    return this.cartProduct.length;
  }

  getCartProduct() {
    this.castService.getCartProducts().subscribe(response => {
      this.cartProduct = response;
      console.log(this.cartProduct);

    });
  }

  isInCart(product) {
    return this.cartProduct.some(item => item.id === product.id);
  }
}
