import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementFromUserComponent } from './deplacement-from-user.component';

describe('DeplacementFromUserComponent', () => {
  let component: DeplacementFromUserComponent;
  let fixture: ComponentFixture<DeplacementFromUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplacementFromUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplacementFromUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
