import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leistungen } from './leistungen';

describe('Leistungen', () => {
  let component: Leistungen;
  let fixture: ComponentFixture<Leistungen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leistungen],
    }).compileComponents();

    fixture = TestBed.createComponent(Leistungen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
