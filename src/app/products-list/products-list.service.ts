import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../source/product.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    /* Use this function for load from two files*/
    getProducts(file: string): Observable<Product[]> {

        return this.http.get(file)
            .map((resp: Response) => {

                let productsList = resp.json();
                let products: Product[] = [];

                for(let index in productsList) {
                    let curr = productsList[index];
                    products.push(curr);
                }
            return products;
            })
    }
}
