import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DecimalPipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  totalOnCart = this.cartService.totalOnCart;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  deleteFromCart(idx: number){
    this.cartService.deleteFromCart(idx);
  }

}
