import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './feature/products/products.component';
import { ProductAlertsComponent } from './feature/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { CartComponent } from './feature/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './feature/shipping/shipping.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductsComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent, ShippingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
