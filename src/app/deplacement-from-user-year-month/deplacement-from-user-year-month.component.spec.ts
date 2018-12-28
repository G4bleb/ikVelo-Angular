import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementFromUserYearMonthComponent } from './deplacement-from-user-year-month.component';

describe('DeplacementFromUserYearMonthComponent', () => {
  let component: DeplacementFromUserYearMonthComponent;
  let fixture: ComponentFixture<DeplacementFromUserYearMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplacementFromUserYearMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplacementFromUserYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
