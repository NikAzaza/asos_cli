import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { ProductsListComponent } from './products-list.component';

@NgModule({
    imports: [
         FormsModule, BrowserModule, HttpModule
    ],
    declarations: [
        ProductsListComponent,
    ],
    exports: [
        ProductsListComponent,
    ],
    providers: [ProductsListComponent]
})
export class ProductsListModule {

}
