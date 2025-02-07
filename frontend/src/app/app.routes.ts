import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { Error404PageComponent } from './pages/errors/error404-page/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '**', component: Error404PageComponent }  
];
