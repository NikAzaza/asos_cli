import { Component, OnInit, Input} from '@angular/core';
import { NgForm} from '@angular/forms';

import { HeaderLinksService } from './header-links.service';
import { LanguageService } from './../language.service';

import { LinkItem } from './../source/link-item';
import { HeaderLinkItem } from './../source/header-link-item';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css'],
    providers: [
                HeaderLinksService
             ]
})
export class HeaderComponent implements OnInit {

    private searchString = '';
    private logo: Object = {};

    private women: Object = {};
    private womenNames: Array<string> = [];

    private men: Object = {};
    private menNames: Array<string> = [];



    constructor(private headerLinks: HeaderLinksService,
                private langService: LanguageService) {}

    ngOnInit() {
        this.headerLinks.getLogo().subscribe((image: Object) => {
            this.logo['src'] = image['src'];
            this.logo['alt'] = image['alt'];
        });

        this.headerLinks.getCategories('women').subscribe((obj: Object) => {
            this.women = obj;

            this.womenNames = [];
            for (let key in this.women) {
                if (this.women.hasOwnProperty(key)) {
                    this.womenNames.push(key);
                }
            }
        });

       this.headerLinks.getCategories('men').subscribe((obj: Object) => {
            this.men = obj;

            this.menNames = [];
            for (let key in this.women) {
                if (this.men.hasOwnProperty(key)) {
                    this.menNames.push(key);
                }
            }
       });
    }


    private showCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.headerLinks.showHiddenCategory(showElem, hoverElem);
    }
    private hideCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.headerLinks.hideHiddenCategory(showElem, hoverElem);
    }

    private clearSearchString() {
        this.searchString = '';
    }

    private changeLanguage(lang: string) {
        this.langService.changeLang(lang);
    }

}
