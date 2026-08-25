import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS, Product } from './data/products';
import { Router } from '@angular/router';

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

  // Переменные для хранения значений фильтров и поиска
  selectedCategory: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  
  // Функция фильтрации
  applyFilter() {
  this.filteredProducts = this.products.filter(item => {
  // Проверка категории
  const matchesCategory = !this.selectedCategory || 
  item.category === this.selectedCategory;

  // Проверка минимальной цены
  const matchesMin = this.minPrice === null || 
  item.price >= this.minPrice;

  // Проверка максимальной цены
  const matchesMax = this.maxPrice === null || 
  item.price <= this.maxPrice;

  return matchesCategory && matchesMin && matchesMax;
  });
 }
   // Функция поиска
   searchTerm: string = '';

  applySuche() {
  this.filteredProducts = this.products.filter(item => {
    //приводим название товара и поисковый запрос к нижнему регистру
    //чтобы поиск работал независимо от больших и маленьких букв
    //и поиск выполняется по включению (includes) фразы в название товара
    return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  });
 }
    //переход на карточку товара при нажатии на кнопку Details
    constructor (private router:Router){}
    applyDetails(item:any){
      this.router.navigate (['/produkt-card', item.id]);
  }
}
