import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BodyService {
      constructor (private http: Http) {}

      getImage(): Observable<Object> {
        return this.http.get('images.json').map((resp: Response) => {
                let image = resp.json()['body'];
                let result: Object = {};

                result['src'] = image['src'];
                result['alt'] = image['alt'];
            return result;
        });
    }
}
