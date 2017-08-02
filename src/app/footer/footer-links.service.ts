import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FooterLinks {
    constructor (private http: Http) {}

    public getLinks(): Observable<Object> {
         return this.http.get('footer-links.json')
            .map((resp: Response) => {
                let currLinks = resp.json();
            return currLinks;
            })
    }
}
