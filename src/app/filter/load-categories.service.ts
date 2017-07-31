import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class LoadCategoriesService{

    constructor(private http: Http) {}
    getCategories(): Observable<Object>{
        //let allProducts: Product[] = [];

        return this.http.get('filter-category.json')
            .map((resp: Response) => {    
                let categories = resp.json();
                let obj = {};

                for (var key in categories) {
                    if (categories.hasOwnProperty(key)) {
                        var arr = categories[key];
                        obj[key] = arr;
                    }
                }
            return obj;
            })
    }
}