import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../services/cart.service';
import {Product} from '../product';
import {CatalogService} from '../services/catalog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  product: any = {};
  term: any;              // search

  constructor(private service: CatalogService) {
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);

    });
  }

  addToCard() {
    this.service.addToCard(this.product).subscribe();
  }

  addProduct() {
    this.service.postProducts(this.product).subscribe();
  }
}
