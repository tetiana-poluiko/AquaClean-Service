import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktkatalogComponent } from './produktkatalog';

describe('ProduktkatalogComponent', () => {
  let component: ProduktkatalogComponent;
  let fixture: ComponentFixture<ProduktkatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktkatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduktkatalogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
