import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=11',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 120,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 135,
        image: 'https://picsum.photos/640/640?r=13',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fronClidEvent(event: string){
    console.log('From Dad: ' + event)
  }

}
