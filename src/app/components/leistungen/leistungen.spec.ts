import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungenComponent } from './leistungen';

describe('LeistungenComponent', () => {
  let component: LeistungenComponent;
  let fixture: ComponentFixture<LeistungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeistungenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeistungenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
