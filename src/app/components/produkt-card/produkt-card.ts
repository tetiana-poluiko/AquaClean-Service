import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../produktkatalog/data/products';

@Component({
  selector: 'app-produkt-card',
  imports: [],
  templateUrl: './produkt-card.html',
  styleUrl: './produkt-card.scss',
})
export class ProduktCardComponent {
    item: any; // Объявляем переменную, к которой обращается ваш HTML-шаблон
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
    // Получаем переданный ID из адресной строки
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Здесь нужно найти товар по этому id (например, из вашего массива данных или сервиса)
    this.item = PRODUCTS.find(p => p.id === id);
  }
}
