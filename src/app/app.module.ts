import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ShopSlideComponent } from './components/shop-slide/shop-slide.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CatComponent } from './pages/cat/cat.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    CatalogueComponent,
    NewArrivalsComponent,
    ContactComponent,
    ProductsComponent,
    ShopSlideComponent,
    SingleProductComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    BlogComponent,
    CategoriesComponent,
    CatComponent,
    ThanksComponent,
    SingleCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
