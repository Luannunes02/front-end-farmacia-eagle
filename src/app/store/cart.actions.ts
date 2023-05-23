import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const addToCart = createAction('[Cart] Add to Cart', props<{ product: Product }>());
export const removeCartItem = createAction('[Cart] Remove Cart Item', props<{ productId: string }>());
export const clearCart = createAction('[Cart] Clear Cart');