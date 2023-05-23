import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';
import { removeCartItem, clearCart } from '../store/cart.actions';
import { selectCartItems } from '../store/cart.selectors';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<Product[]>;

  constructor(private store: Store<any>, private toastr: ToastrService) {}

  ngOnInit() {
    this.cartItems$ = this.store.pipe(select(selectCartItems));
  }

  calculateTotalPrice(cartItems: Product[]): number {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }

  removeFromCart(productId: string): void {
    this.store.dispatch(removeCartItem({ productId }));
  }

  buy(): void {
    this.store.dispatch(clearCart());
    this.toastr.success('Produtos comprados, obrigado!', 'Parabéns', {
      positionClass: 'toast-top-right',
    });
  }
}
