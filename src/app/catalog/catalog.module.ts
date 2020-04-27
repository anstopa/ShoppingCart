import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './filter.pipe';
import {FormsModule} from '@angular/forms';
import {CatalogComponent} from './catalog.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [CatalogComponent, FilterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
