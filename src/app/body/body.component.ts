import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from './../language.service';

@Component({
    moduleId: module.id,
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    constructor (private langService: LanguageService) {}
}
