import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Store } from './services/store.services';
import { CartComponent } from './views/cart.component';
import ProductComponent from './views/product.component';
import { LoginPage } from './pages/loginPage.component';
import { ShopPage } from './pages/shopPage.component';
import { CheckoutPage } from './pages/checkout.component';
import { FormsModule } from '@angular/forms';
import router from './router';
import { AuthActivator } from './services/authActivator.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ShopPage,
    CheckoutPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    router,
    FormsModule
  ],
  providers: [
    Store,
    AuthActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
