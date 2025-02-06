import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { Error404PageComponent } from './pages/errors/error404-page/error404-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '**', component: Error404PageComponent }  
];
