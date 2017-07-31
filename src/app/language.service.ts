import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    constructor(private translate: TranslateService) {
        translate.addLangs(['ru', 'en']);
        translate.setDefaultLang('en');
        translate.use('en');
    }

    changeLang(language: string) {
        this.translate.use(language);
        console.log('changing Language! Current:' + this.translate.currentLang);
    }
    getLang() {
        return this.translate.currentLang;
    }
}
