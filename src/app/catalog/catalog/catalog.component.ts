import {Component, OnInit} from '@angular/core';

import {CatalogService} from '../../services/catalog.service';
import {CartService} from '../../services/cart.service';
import {Product} from '../../Models/cart.models';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  cartProduct: Product[] = [];
  searchText: string;
  productRelated: Product[] = [];

  constructor(
    private catalogService: CatalogService,
    private castService: CartService
  ) {
  }

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe((response) => {
      this.products = response;
      this.getCartProduct();
    });

  }

  addToCard(product: Product) {
    this.product = product;
    this.catalogService
      .addToCard(this.product)
      .subscribe(() => this.getCartProduct());
    this.isInCart(product);
    this.relatedProducts(product);
  }

  get counter() {
    if (this.cartProduct.length === 0) {
      return 0;
    }
    return this.cartProduct.length;
  }

  getCartProduct() {
    this.castService.getCartProducts().subscribe((response) => {
      this.cartProduct = response;
    });
  }

  isInCart(product) {
    return this.cartProduct.some(
      (item) => item.productId === product.productId
    );
  }

  relatedProducts(product: Product) {
    if (product.relatedProducts === '') {
      return null;
    } else {
      const relProd = product.relatedProducts.split(',');
      relProd.forEach((y) => {
        this.productRelated.push(
          this.products.find((x) => x.productId === parseInt(y, 10))
        );
      });
    }
  }

  close() {
    this.productRelated = [];
  }
}
