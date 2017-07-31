import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../source/Product';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{

    constructor(private http:Http){ }

    /* Use this function for load from two files*/
    getProducts(file: string): Observable<Product[]> {
        //vlet allProducts: Product[] = [];

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

    // Use this function for load from one file - 'products.json'
   /* getProducts(file: string): Observable<Object>{
        
        return this.http.
            get(file).map((resp: Response)=>{

                let mainObj: Object = resp.json();
                let products: Object = {};
                console.log('data:'+mainObj);

                for (let gender in mainObj) {
                    if (mainObj.hasOwnProperty(gender)) {
                        
                        let productsList = mainObj[gender];
                        products[gender] = [];

                        for(let index in productsList){
                        let prod = productsList[index];
                        products[gender].push(prod)
                        }
                        
                    }
                }
                return products;
            });
    }*/
}