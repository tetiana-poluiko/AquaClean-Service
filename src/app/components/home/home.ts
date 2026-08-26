import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
    constructor (private router:Router){}
    applyDetail(id:number){
      this.router.navigate(['/produkt-card',id]);
  }
}
