import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { supabase } from '../../supabase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produktkatalog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produktkatalog.html',
  styleUrl: './produktkatalog.scss',
})
export class ProduktkatalogComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private router:Router) {} //принудительное обновление страницы
  // Переменные для хранения значений фильтров и поиска
  selectedCategory: string = '';
  filteredProducts: any[] = []; //это массив строк из выборки по запросу из БД 
  minPrice: number | null = null;
  maxPrice: number | null = null;
  ngOnInit() {
    supabase
      .from('product_aquaclean')
      .select('*')
      .then(({data , error}: any)=> {
           if (error) {
             console.error('Ошибка БД', error);
             return;
            }      
      this.filteredProducts = data || [];
      this.cdr.detectChanges();
      });
    }
   
    async applyFilter(){
        // 1. Создаем базовый запрос к таблице
        let query = supabase
        .from('product_aquaclean')
        .select('*');
        // 2. Если минимальная цена заполнена(не пустая, не равна 0), 
        // то добавляем ее в строку условия для фильтрации query 
        if (this.minPrice !== null && this.minPrice !== undefined) {
        query = query.gte('price', this.minPrice);
        }
        // 3.Если максимальная цена заполнена(не пустая, не равна 0), 
        // то добавляем ее в строку условия для фильтрации query 
        if (this.maxPrice !== null && this.maxPrice !== undefined) {
        query = query.lte('price', this.maxPrice);
        }
        // 4. Если категория выбрана, то добавляем ее в условие query
        if (this.selectedCategory && this.selectedCategory !== '') {
        query = query.ilike('category', this.selectedCategory);
        }
      const { data, error } = await query //в query условия запроса, результат выборки на 2 сек запишется в data
      //Обработка ошибок
        if (error) {
         console.error('Ошибка при фильтрации:', error);
        return;
        }
      // 6. ОБЯЗАТЕЛЬНО! Сохраняем полученный массив в переменную компонента, 
      // чтобы HTML-цикл @for смог вывести карточки на экран
        this.filteredProducts = data; //из data выгружаем результат выборки в глобальную переменную filteredProducts, которую будем юзать
        this.cdr.detectChanges();         
  } //applyFilter() закончилась
 
searchTerm: string = '';
    async applySuche() {
      // 1. Создаем базовый запрос к таблице
      let query = supabase
          .from('product_aquaclean')
          .select('*');

      // 2. Если пользователь что-то ввел в поле поиска, добавляем условие .ilike()
      if (this.searchTerm && this.searchTerm.trim() !== '') {
          // Ищем совпадения в колонке 'name' (название товара)
          query = query.ilike('name', `%${this.searchTerm}%`);
      }
      // 3. Выполняем запрос
      const { data, error } = await query;
          if (error) {
              console.error('Ошибка при поиске:', error);
              return;
            }
      // 4. Записываем результат в общую переменную для вывода на экран
      this.filteredProducts = data;
      this.cdr.detectChanges();
    }
//переход на карточку товара при нажатии на кнопку Details
   // constructor (private router:Router){}
    applyDetails(item:any){
      this.router.navigate (['/produkt-card', item.id]);
  }
}
