import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktCard } from './produkt-card';

describe('ProduktCard', () => {
  let component: ProduktCard;
  let fixture: ComponentFixture<ProduktCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduktCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
