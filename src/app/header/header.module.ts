// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// This Module's Components
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [
        FormsModule, BrowserModule, HttpModule
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}
