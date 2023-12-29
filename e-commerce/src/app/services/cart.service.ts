import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  // creiamo una proprietà (corrispondente all'interfaccia array) che memorizzerà l'array dei prodotti contenuti nel carrello
  items: Product[] = [];

  // Definiamo i metodi per : aggiungere articoli nel carrello, restituire gli articoli nel carrello e cancellarli

  // aggiunge un prodotto all'array vuoto
  addToCart(product: Product) {
    this.items.push(product);
  }

  // removeToCart() {
  //   this.items.pop();
  // }

  // raccoglie di articoli che gli utenti aggiungono al carrello e restituisce ciascun articolo con la quantità associata
  getItems() {
    return this.items;
  }

  // restitiusce un array vuoto di articoli e quindi svuota il carrello
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  constructor(private http: HttpClient) {}
}
