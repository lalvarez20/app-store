import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  @Input() prdId?: string;

  detailProd = signal<Product | null>(null);
  coverImage = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(){
    if(this.prdId){
      this.productService.getProductDetail(this.prdId)
      .subscribe({
        next: (detProduct) => {
          this.detailProd.set(detProduct);
          if(detProduct.images.length > 0){
            this.coverImage.set(detProduct.images[0]);
          }
        }
      })
    }
  }

  changeCoverImg(img: string){
    this.coverImage.set(img);
  }

  addToCart(){
    const product = this.detailProd();
    if(product){
      this.cartService.addToCart(product)
    }
  }

}
