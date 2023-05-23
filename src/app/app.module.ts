import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { cartReducer } from './store/cart.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsControlComponent } from './products-control/products-control.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductChangeComponent } from './product-change/product-change.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductComponent } from './product/product.component';
import { CardControlProductComponent } from './components/card-control-product/card-control-product.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductsControlComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/change/:id', component: ProductChangeComponent },
  { path: '**', component: PageNotFoundComponent } // Rota curinga para lidar com URLs desconhecidas
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsControlComponent,
    ProductAddComponent,
    ProductChangeComponent,
    HeaderComponent,
    CardProductComponent,
    ProductComponent,
    CardControlProductComponent,
    FooterComponent,        
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
