import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProduktkatalogComponent } from './components/produktkatalog/produktkatalog';
import { LeistungenComponent } from './components/leistungen/leistungen';
import { ImpressumComponent } from './components/impressum/impressum';
import { DatenschutzComponent } from './components/datenschutz/datenschutz';
import { AvgComponent } from './components/avg/avg';
import { ProduktCardComponent} from './components/produkt-card/produkt-card';
import { AuthComponent } from './components/auth/auth';
export const routes: Routes = [
// Перенаправление с пустого адреса на главную страницу
{ path: '', redirectTo: 'home', pathMatch: 'full' },
// Основные страницы сайта
{ path: 'home', component: HomeComponent },
{ path: 'katalog', component: ProduktkatalogComponent },
{ path: 'leistungen', component: LeistungenComponent },
// Юридические страницы
{ path: 'impressum', component: ImpressumComponent },
{ path: 'datenschutz', component: DatenschutzComponent },
{ path: 'agb', component: AvgComponent },
{ path: 'produkt-card/:id', component: ProduktCardComponent },
{ path: 'auth', component: AuthComponent }
];