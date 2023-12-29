import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // si preferisce passare il riferimento a tutta l'interfaccia (che definisce la struttura dei dati), in modo tale da rendere il codice più riutilizzabile e non essere legati alla struttura di quello specifico array - questo crea un collegamento con il genitore (products.component.ts)
  @Input() productList?: Product;

  constructor(public notifyService: ProductsService) {}
}
