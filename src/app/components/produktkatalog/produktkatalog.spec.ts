import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produktkatalog } from './produktkatalog';

describe('Produktkatalog', () => {
  let component: Produktkatalog;
  let fixture: ComponentFixture<Produktkatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produktkatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(Produktkatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
