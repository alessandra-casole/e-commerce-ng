import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // definisco la proprietà items per memorizzare i prodotti nel carrello:
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {
    console.log(this.items);
  }
}
