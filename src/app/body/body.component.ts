import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from './../language.service';
import { BodyService } from './body.service';

@Component({
    moduleId: module.id,
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
    providers: [BodyService]
})
export class BodyComponent implements OnInit {
    private bodyImage: Object = {};

    constructor(private bodyService: BodyService,
                private languageService: LanguageService) { }

    ngOnInit() {
        this.bodyService.getImage().subscribe((image: Object) => {
            this.bodyImage['src'] = image['src'];
            this.bodyImage['alt'] = image['alt'];
        });
        console.log(this.bodyImage);
    }
}
