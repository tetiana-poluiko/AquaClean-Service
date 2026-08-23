import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS, Product } from './data/products';

@Component({
  selector: 'app-produktkatalog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produktkatalog.html',
  styleUrl: './produktkatalog.scss',
})

export class ProduktkatalogComponent {
   products: Product[] = PRODUCTS;
   
   // Список товаров, который выводится на экран (меняется при фильтрации)
   filteredProducts: Product[] = PRODUCTS;

  // Переменные для фильтров
  selectedCategory: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  // Функция фильтрации
  applyFilter() {
  this.filteredProducts = this.products.filter(item => {
  // Проверка категории
  const matchesCategory = !this.selectedCategory || item.category === this.selectedCategory;

  // Проверка минимальной цены
  const matchesMin = this.minPrice === null || item.price >= this.minPrice;

  // Проверка максимальной цены
  const matchesMax = this.maxPrice === null || item.price <= this.maxPrice;

  return matchesCategory && matchesMin && matchesMax;
  });
 }
}
