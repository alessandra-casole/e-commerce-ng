import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // corrisponde all'array presente in models/products.ts - inserisco la parte "logica" qua dentro
  // products = [...products];

  // questo è il mio repository (che in teoria andrebbe messo dentro lo state manager)
  products: Product[] = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
    },
  ];

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() {}
}

