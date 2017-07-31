import { Component } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>    `,
    providers: [LanguageService]
})
export class AppComponent {
    constructor(private langService: LanguageService) {}

}
