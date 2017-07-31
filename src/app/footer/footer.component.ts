import { Component, OnInit } from '@angular/core';
import { FooterLinks } from './footer-links.service';
import { LanguageService } from './../language.service';

export class FooterInfo {
    value: String;
    ref: String;
}
@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: [FooterLinks]
})
export class FooterComponent implements OnInit {
    usersEmail = '';
    links: Object = {};
    linksNames: Array<string> = [];

    constructor (private langService: LanguageService,
                 private footerLinks: FooterLinks) { }

    ngOnInit(): void {
        this.footerLinks.getLinks().subscribe((obj: Object) => {
            this.links = obj;
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    this.linksNames.push(key);
                }
            }
            console.log(this.links);
        })
    }
}
