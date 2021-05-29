import { Routes } from "@angular/router"
import { ProductListComponent } from './product/product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent}

]
