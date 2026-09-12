import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { supabase } from '../../supabase';
import { Router } from '@angular/router';
import { window } from 'rxjs';

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
  ArrayModellNummer: any[] = []; 
  ArrayProdukt: any[] = [];  
  ngOnInit() {
    supabase
      .from('product_aquaclean')
      .select('id, Modellnummer, name, imageUrl, product_variants(price)')
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
        const { data: ArrayData, error: errorArray} = await supabase
        .from('categories')
        .select('categorie_id, categorie_name, product_categories(Modellnummer)')
        .ilike('categorie_name', this.selectedCategory);
        if (errorArray) {
           console.error('Ошибка при фильтрации:', errorArray);
           return;}
        //превращаем сложный массив объектов в плоский список Modellnummer
        this.ArrayModellNummer = ArrayData.flatMap((cat:any) =>
        cat.product_categories.map((item:any) => item.Modellnummer));        
        console.log('Найденные Modellnummer:', this.ArrayModellNummer);
        // Создаем главный запрос из БД с учетом всех фильтров от пользователя
        let hauptQuery = supabase
        .from('product_aquaclean')
        .select('id, Modellnummer, name, imageUrl, product_variants!inner(price)')
        .in('Modellnummer', this.ArrayModellNummer)
        // 2. Если минимальная цена заполнена(не пустая, не равна 0), 
        // то добавляем ее в строку условия для фильтрации query 
        if (this.minPrice !== null && this.minPrice !== undefined && String(this.minPrice) !== '') {
        hauptQuery = hauptQuery.gte('product_variants.price', this.minPrice);
        }
        // 3.Если максимальная цена заполнена(не пустая, не равна 0), 
        // то добавляем ее в строку условия для фильтрации query 
        if (this.maxPrice !== null && this.maxPrice !== undefined && String(this.maxPrice) !== '') {
        hauptQuery = hauptQuery.lte('product_variants.price', this.maxPrice);
        }
        const { data: ArrayProdukt, error: errorProdukt } = await hauptQuery; 
        //Обработка ошибок
        if (errorProdukt) {
         console.error('Ошибка при фильтрации:', errorProdukt);
        return;
        }
        this.filteredProducts = ArrayProdukt; 
        this.cdr.detectChanges();         
      } //applyFilter() закончилась 
 
    searchTerm: string = '';
    async applySuche() {
      let query = supabase
          .from('product_aquaclean')
          .select('id, Modellnummer, name, imageUrl, product_variants(price)');          
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
    applyDetails(item:any){
      console.log('Весь объект товара', item);
      this.router.navigate (['/produkt-card', item.Modellnummer]);      
  }
}
