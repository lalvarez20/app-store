import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  addToCart(newProduct: Product){
    this.cartService.addToCart(newProduct);
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
          this.products.set(products);
      },
      error: () => {

      }
    })
  }

  private getCategories(){
    this.categoryService.getAllCategories()
    .subscribe({
      next: (data) => {
          this.categories.set(data);
      },
      error: () => {

      }
    })
  }

}
