import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import '../source/product.interface';
import { HttpService } from './products-list.service';

import { Subject } from 'rxjs/Subject';

import { LanguageService } from './../language.service';

@Component({
    moduleId: module.id,
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [HttpService]
})
export class ProductsListComponent implements OnInit {
    private numOfColumn = 3;
    @Input() public parentSubject: Subject<Object>;


    private allProducts: Object = {};
    private products: Product[] = [];

    private productsFiles: Object = {
        'women': 'products200-women.json',
        'men': 'products200-men.json'
    };
    constructor(private httpService: HttpService,
                private activateRoute: ActivatedRoute,
                private router: Router,
                private langService: LanguageService) {  }

    ngOnInit() {
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
    }

    public applyFilter(filter: Object) {
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

    public applyUrlFilter(filter: Object) {
        for (let category in filter) {
            if (filter.hasOwnProperty(category)) {
                let value = filter[category];

                this.products = this.products.filter((product) => {
                    return (product[category] === value);
                });
            }
        }
    }


    public changeGrid(num: number) {
        this.numOfColumn = num;
    }
}
