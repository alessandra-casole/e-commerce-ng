import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  // prende come argomento il prodotto corrente, utilizza il metodo definito nel service per prendere il prodotto e restituisce un messaggio che informa dell'operazione
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // accedo alla route e controllo cosa spunta dentro paramMap (da qui vedo il mio valore - scritto nel routing, di "productId" che al momento è una stringa)
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    // prendo l'id vero e proprio trasformandolo in un numero (perchè adesso è una stringa) e lo faccio con il + davanti, aggiungendo il bang (!) per avvisare che il valore arriverà per certo
    const productIdFromRoute = +routeParams.get("productId")!;
    console.log(productIdFromRoute);

    // trova il prodotto che corrisponde all'id fornito in route
    this.product = this.productService.products.find(product => product.id === productIdFromRoute);
  }
}
