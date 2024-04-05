import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, DatePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img = 'https://picsum.photos/640/640?r=' + Math.random()
  @Input({ required:true }) product!: Product;

  @Output() addToCard = new EventEmitter();

  addToCartHandler(){
    this.addToCard.emit(this.product);
  }
}
