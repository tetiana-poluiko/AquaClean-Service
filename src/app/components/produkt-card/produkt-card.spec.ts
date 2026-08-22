import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktCardComponent } from './produkt-card';

describe('ProduktCard', () => {
  let component: ProduktCardComponent;
  let fixture: ComponentFixture<ProduktCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduktCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
