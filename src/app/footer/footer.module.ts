// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

// This Module's Components
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        FormsModule, BrowserModule
    ],
    declarations: [
        FooterComponent,
    ],
    exports: [
        FooterComponent,
    ]
})
export class FooterModule {

}
