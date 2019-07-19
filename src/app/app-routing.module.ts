import { CategoriesComponent } from './components/categories/categories.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { CatComponent } from './pages/cat/cat.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home',
    children: [
      {  path: '' , component: HomeComponent },
      {  path: ':catId' , component: CatComponent }
    ]
  },
  { path: 'shop' ,
    children: [
     {  path: '', component: ShopComponent },
     {  path: ':productId' , component: SingleProductComponent }
   ]
   },
  { path: 'catalogue' , component: CatalogueComponent },
  { path: 'new-arrivals' , component: NewArrivalsComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'cart' , component: CartComponent },
  { path: 'wishlist' , component: WishlistComponent },
  { path: 'checkout' , component: CheckoutComponent },
  { path: 'blog' , component: BlogComponent },
  { path: 'thank-you' , component: ThanksComponent },
  { path: 'categories' ,
    children: [
     {  path: '', component: CategoriesComponent },
     {  path: ':categoryId' , component: CategoriesComponent }
   ]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
