import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsControlComponent } from './products-control.component';

describe('ProductsControlComponent', () => {
  let component: ProductsControlComponent;
  let fixture: ComponentFixture<ProductsControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsControlComponent]
    });
    fixture = TestBed.createComponent(ProductsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
