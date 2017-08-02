import { Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { BodyComponent } from './body/body.component';


export const appRoutes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'products/:gender', component: FilterComponent},
  {path: '**', redirectTo: '/'}
];
