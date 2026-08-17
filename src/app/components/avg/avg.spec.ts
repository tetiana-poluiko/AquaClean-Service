import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avg } from './avg';

describe('Avg', () => {
  let component: Avg;
  let fixture: ComponentFixture<Avg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avg],
    }).compileComponents();

    fixture = TestBed.createComponent(Avg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
