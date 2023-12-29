import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { ProductsComponent } from './feature/products/products.component';
import { CartComponent } from './feature/cart/cart.component';
import { ShippingComponent } from './feature/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'shipping', component: ShippingComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
