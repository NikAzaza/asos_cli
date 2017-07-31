import { Component, OnInit, Input} from '@angular/core';
import { NgForm} from '@angular/forms';

import { HiddenMenuService } from './hover-hidden-menu.service';
import { HiddenCathedoriesLinksService } from './hidden-categories-links.service';
import { LanguageService } from './../language.service';

import { LinkItem } from './../source/link-item';
import { HeaderLinkItem } from './../source/header-link-item';

@Component({
   // moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css'],
    providers: [
                HiddenMenuService,
                HiddenCathedoriesLinksService
             ]
})
export class HeaderComponent implements OnInit {

    searchString = '';

    women: Object = {};
    womenNames: Array<string> = [];

    men: Object = {};
    menNames: Array<string> = [];


    constructor(
        private hiddenMenuService: HiddenMenuService,
        private hiddenLinks: HiddenCathedoriesLinksService,
        private langService: LanguageService) {}

    ngOnInit(): void {
       this.hiddenLinks.getCategories('women').subscribe((obj: Object) => {
           this.women = obj;

           this.womenNames = [];
           for (let key in this.women) {
               if (this.women.hasOwnProperty(key)) {
                   this.womenNames.push(key);
               }
           }
       });

       this.hiddenLinks.getCategories('men').subscribe((obj: Object) => {
            this.men = obj;

            this.menNames = [];
            for (let key in this.women) {
                if (this.men.hasOwnProperty(key)) {
                    this.menNames.push(key);
                }
            }
       });
    }


    showCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.hiddenMenuService.showHiddenCategory(showElem, hoverElem);
    }
    hideCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.hiddenMenuService.hideHiddenCategory(showElem, hoverElem);
    }

    clearSearchString() {
        this.searchString = '';
    }

    changeLanguage(lang: string) {
        this.langService.changeLang(lang);
    }

}
