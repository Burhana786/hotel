import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishdeailsComponent } from './dishdeails.component';

describe('DishdeailsComponent', () => {
  let component: DishdeailsComponent;
  let fixture: ComponentFixture<DishdeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishdeailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishdeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
