import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { supabase } from '../../supabase';

@Component({
  selector: 'app-produkt-card',
  imports: [],
  templateUrl: './produkt-card.html',
  styleUrl: './produkt-card.scss',
})
export class ProduktCardComponent implements OnInit {
    item: any; 
    constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}
    async ngOnInit() {      // Получаем переданный ID из адресной строки
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const { data, error } = await supabase
      .from('product_aquaclean')
      .select('*')
      .eq('id', id)
      .single();

      if(data){
        this.item = data;        
      }   
      this.cdr.detectChanges();   
    }
}
