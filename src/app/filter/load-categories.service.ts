import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadCategoriesService {

    constructor(private http: Http) {}
    public getCategories(): Observable<Object> {

        return this.http.get('filter-category.json')
            .map((resp: Response) => {
                let filter = resp.json();
                let result = {};

                for (let gender in filter) {
                    if (filter.hasOwnProperty(gender)) {
                        let genderFilter = filter[gender];
                        result[gender] = genderFilter;
                    }
                }
            return result;
            })
    }
}
