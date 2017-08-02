import { Component } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [LanguageService]
})
export class AppComponent {
    constructor(private languageService: LanguageService) {}
}
