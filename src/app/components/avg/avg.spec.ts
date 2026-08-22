import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgComponent } from './avg';

describe('AvgComponent', () => {
  let component: AvgComponent;
  let fixture: ComponentFixture<AvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvgComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
