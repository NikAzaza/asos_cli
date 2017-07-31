import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterComponent } from './filter/filter.component';
import { BodyComponent } from './body/body.component';

import { LanguageService } from './language.service';

import { AppComponent } from './app.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './i18n/', '.json');
}

const appRoutes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'products/:gender', component: FilterComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
    imports:
    [ BrowserModule, FormsModule,
      RouterModule.forRoot(appRoutes), HttpModule,
      HttpClientModule,
      TranslateModule,
      TranslateModule.forRoot({
        loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
      })
    ],

    declarations:
      [ AppComponent, ProductsListComponent,
        BodyComponent, HeaderComponent,
        FooterComponent, FilterComponent
        // LanguageService
      ],
    providers: [LanguageService],
    bootstrap:    [ AppComponent ]
})

export class AppModule {

}
