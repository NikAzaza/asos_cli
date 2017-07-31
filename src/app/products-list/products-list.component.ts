import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from '../source/Product';
import { HttpService } from './http.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { LanguageService } from './../language.service';

@Component({
    moduleId: module.id,
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [HttpService]
})
export class ProductsListComponent implements OnInit, OnDestroy {
    numOfColumn = 3;
    @Input() parentSubject: Subject<Object>;


    allProducts: Object = {};
    products: Product[] = [];

    productsFiles: Object = {
        'women': 'products200-women.json',
        'men': 'products200-men.json'
    };
    constructor(private httpService: HttpService,
                private activateRoute: ActivatedRoute,
                private router: Router,
                private langService: LanguageService) {  }

    ngOnInit(): void {
        this.reloadProducts();

        this.router.events.subscribe(() => {
            let newGender = this.activateRoute.snapshot.params['gender'];
            this.products = this.allProducts[newGender];

            let params = this.activateRoute.snapshot.queryParams;
            if (Object.keys(params).length) {
                this.applyUrlFilter(params);
            }
        });

        this.parentSubject.subscribe(event => {
            this.applyFilter(event);
        });
    }

    public reloadProducts() {
       // Using when need to load data from 2 files
        for (let gender in this.productsFiles) {
            if (this.productsFiles.hasOwnProperty(gender)) {

                let file = this.productsFiles[gender];
                this.allProducts[gender] = [];

                this.httpService.getProducts(file)
                    .subscribe((data: Product[]) => {
                        this.allProducts[gender] = data;
                        this.products = this.allProducts[this.activateRoute
                                            .snapshot.params['gender']];

                        let params = this.activateRoute.snapshot.queryParams;
                        if (Object.keys(params).length) {
                            this.applyUrlFilter(params);
                        }
                    });
            }
        }

        // Use for load from 1 file
        /*this.httpService.getProducts('products.json')
                    .subscribe((data)=>this.allProducts = data);*/
    }

    public applyFilter(filter: Object){
        this.products = this.allProducts[this.activateRoute.snapshot.params['gender']];

        for (let key in filter) {
            if (filter.hasOwnProperty(key)) {
                let categoryArray: Array<any> = filter[key];

                if (categoryArray) {
                    this.products = this.products.filter((product) => {
                        let isContain = false;

                            categoryArray.forEach((elem) => {
                                if (product[key] === elem) {
                                    isContain = true;
                                }
                            });

                        return isContain;
                    });
                }

            }
        }
    }
    
    public applyUrlFilter(filter: Object){
        for (let category in filter) {
            if (filter.hasOwnProperty(category)) {
                let value = filter[category];

                this.products = this.products.filter((product)=>{
                    return (product[category] === value);
                });
            }
        }
    }
    

    changeGrid(num: number){
        this.numOfColumn = num;
    }
    
    ngOnDestroy() {
        //this.parentSubject.unsubscribe();
    }
}
