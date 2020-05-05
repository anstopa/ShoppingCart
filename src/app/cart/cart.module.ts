import { NgModule } from '@angular/core';
import {CommonModule, FormStyle} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
