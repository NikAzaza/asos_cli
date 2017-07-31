import { HeaderLinkItem } from './../source/header-link-item';
import { Product } from './../source/product';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HiddenCathedoriesLinksService {

    constructor (private http: Http) {}

    getCategories(gender: string): Observable<Object> {
         return this.http.get('header-links.json')
            .map((resp: Response) => {
                let currLinks = resp.json()[gender];
            return currLinks;
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

    womenLinks: Object = {
        products: this.womenProducts,
        brands: this.womenBrands,
        edits: this.womenEdits
    };

    //========================================================Men's Links =============================================
   /* categories1: string[] = ['Cвитшоты','Блейзеры',
        'Ботинки','Брюки','Джинсы','Комбинезоны',
        'Кроссовки','Куртки','Майки','Рубашки'];

    /* brands1: string[] = ['Cheap Monday','Cheap Monday',
    'Crooked Tongues','Defend London','Diesel','Dolce & Gabbana',
    'Ellesse','Emporio Armani','Fred Perry','G-Star'];


    menLinks: Object = {
        products: this.menShopByProduct,
        brands: this.menBrands,
        edits: this.menEdits
    };*/
}
