import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CatalogComponent} from './catalog/catalog.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
