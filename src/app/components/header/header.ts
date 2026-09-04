import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isMenuOpen: boolean = false;
  userName: string | null = null;
  OverlayMenu(){
     this.isMenuOpen = true;
  }
  ngOnInit(){
    this.userName = localStorage.getItem('userName');
  }
  OpenAnmeldung(){
      this.router.navigate (['/auth']);
  }
}