import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './services/product.service';
import { CartItemService } from './services/cart-item.service';
import { HeaderSearchToolComponent } from './header/header-search-tool/header-search-tool.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HeaderNavigationComponent } from './header/header-navigation/header-navigation.component';
import { ToolbarAccountComponent } from './header/header-toolbar/toolbar-account/toolbar-account.component';
import { ToolbarSearchComponent } from './header/header-toolbar/toolbar-search/toolbar-search.component';
import { ToolbarCartComponent } from './header/header-toolbar/toolbar-cart/toolbar-cart.component';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackToTopComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderSearchToolComponent,
    HeaderLogoComponent,
    HeaderNavigationComponent,
    ToolbarAccountComponent,
    ToolbarSearchComponent,
    ToolbarCartComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    Ng2IziToastModule,

    RouterModule.forRoot(ROUTES, {})
  ],
  providers: [
    ProductService,
    CartItemService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
