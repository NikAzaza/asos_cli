import { HeaderLinkItem } from './../source/header-link-item';
import { Product } from './../source/product';

import { ElementRef, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderLinksService {

    constructor (private http: Http,
                private renderer: Renderer2) {}

    getLogo(): Observable<Object> {
        return this.http.get('images.json').map((resp: Response) => {
            let image = resp.json()['logo'];
            return image;
        });
    }


    // Load header links from .json
    getCategories(gender: string): Observable<Object> {
         return this.http.get('header-links.json')
            .map((resp: Response) => {
                let genderLinks = resp.json()[gender];
            return genderLinks;
            })
    }


// ===================================================Women's Links================================================
/*categories: string[] = ['Брюки','Джемперы','Джинсы',
    'Кардиганы','Колготки','Комбинезоны','Косметика',
    'Куртки','Пальто','Платья'];

   /* brands: string[] = ['Abbott Lyon','Adidas',
    'Aeryne','Defend', 'Armani Exchange',
    'Bec & Bridge','Daisy Street Plus','Elise Ryan',
    'Marc Jacobs','New Look Plus',];

    womenEdits: HeaderLinkItem[] = [
        {value: 'style 1', params: {}},
        {value: 'style 2', params: {}},
        {value: 'style 3', params: {}},
        {value: 'style 4', params: {}}
    ];

    // ========================================================Men's Links =============================================
   /* categories1: string[] = ['Cвитшоты','Блейзеры',
        'Ботинки','Брюки','Джинсы','Комбинезоны',
        'Кроссовки','Куртки','Майки','Рубашки'];

    /* brands1: string[] = ['Cheap Monday','Cheap Monday',
    'Crooked Tongues','Defend London','Diesel','Dolce & Gabbana',
    'Ellesse','Emporio Armani','Fred Perry','G-Star'];
*/

    // Show\hide hidden header links and add custom style to hover link
    showHiddenCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.renderer.setStyle(showElem, 'display', 'block');
        this.renderer.addClass(hoverElem, 'main-list-item-hoverable');
        this.renderer.setStyle(hoverElem, 'border-left-color', '#111');

        let childElem = hoverElem.children[0];
        this.renderer.setStyle(childElem, 'color', '#fff');
        this.renderer.setStyle(childElem, 'text-decoration', 'underline');
    }

    hideHiddenCategory(showElem: HTMLElement, hoverElem: HTMLElement) {
        this.renderer.setStyle(showElem, 'display', 'none');
        this.renderer.removeClass(hoverElem, 'main-list-item-hoverable');
        this.renderer.setStyle(hoverElem, 'border-left-color', '#aaa');

        let childElem = hoverElem.children[0];
        this.renderer.setStyle(childElem, 'color', '#000');
         this.renderer.setStyle(childElem, 'text-decoration', 'none');
    }
}
