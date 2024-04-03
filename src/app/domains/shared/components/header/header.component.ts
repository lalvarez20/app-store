import { Component, Input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  @Input({required: true}) cart: Product[] = [];

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

}
