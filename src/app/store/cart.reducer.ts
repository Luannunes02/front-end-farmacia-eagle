import { createReducer, on } from '@ngrx/store';
import { addToCart, removeCartItem } from './cart.actions';
import { clearCart } from './cart.actions';
import { Product } from './product.model';

export interface CartState {
  items: Product[];
  favorites: number[];
}

const initialState: CartState = {
  items: [],
  favorites: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    return {
      ...state,
      items: [...state.items, product],
    };
  }),
  on(removeCartItem, (state, { productId }) => {
    return {
      ...state,
      items: state.items.filter(item => item.id !== productId),
    };    
  }),
  on(clearCart, (state) => ({
    ...state,
    items: []
  }))
);
