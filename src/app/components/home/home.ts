import { Component, ChangeDetectorRef, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { supabase } from '../../supabase';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  constructor (private router:Router, private cdr: ChangeDetectorRef){}
  randomArray: number[] = [];
  countWaren: number = 1; //количество товаров   
  filteredProducts: any[] = [];  
  maintenanceMessage: string = '';
    applyDetail(id:number){
      this.router.navigate(['/produkt-card',id]);
  }
  ngOnInit() {
    this.RandomWaren();
   // this.cdr.detectChanges();
  }
  async RandomWaren(){
    this.randomArray = [];
    //Проверяем сколько реально позиций товаров в БД и присваиваем это количесво countWaren
    const { count } = await supabase
         .from('product_aquaclean')
         .select('*', { count: 'exact', head: true });
         if (count) this.countWaren = count 
           else {
              console.warn('Es sind weniger als vier Produkte in der Datenbank vorhanden.');
              this.maintenanceMessage = 'Technische Arbeiten am Server.';
  return;
              return;    
            }
    
         //собираем случайные 4 номера id для выборки товаров по этим номерам из БД
    while (this.randomArray.length < 4 && this.randomArray.length < this.countWaren){
    //while (this.randomArray.length < 4) {
        const randomVar = Math.floor(Math.random() * this.countWaren) + 1;
         if (!this.randomArray.includes(randomVar)) {
            this.randomArray.push(randomVar);
          }  
    }
    //Делаем один запрос в БД и забираем сразу все 4 строки товаров из таблицы
      const { data, error } = await supabase
      .from('product_aquaclean') 
      .select('*')
      .in('id', this.randomArray);
    if (data) {
    this.filteredProducts = data;
    }
  this.cdr.detectChanges();
  }
  //переход на карточку товара при нажатии на кнопку Details
   // constructor (private router:Router){}
    applyDetails(item:any){
      this.router.navigate (['/produkt-card', item.id]);
  }
}

