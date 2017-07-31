// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';


// This Module's Components
import { BodyComponent } from './body.component';

@NgModule({
    imports: [
         FormsModule, BrowserModule
    ],
    declarations: [
        BodyComponent,
    ],
    exports: [
        BodyComponent,
    ]
})
export class BodyModule {

}
