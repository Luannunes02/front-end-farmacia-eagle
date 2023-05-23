import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardControlProductComponent } from './card-control-product.component';

describe('CardControlProductComponent', () => {
  let component: CardControlProductComponent;
  let fixture: ComponentFixture<CardControlProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardControlProductComponent]
    });
    fixture = TestBed.createComponent(CardControlProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
