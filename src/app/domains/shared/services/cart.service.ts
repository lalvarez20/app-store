import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  totalOnCart = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }

  deleteFromCart(idx: number) {
    this.cart.update((cart) => cart.filter((product, position) => position !== idx));
  }
}
