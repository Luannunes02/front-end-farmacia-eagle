import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { addToCart } from '../store/cart.actions';
import { ToastrService } from 'ngx-toastr';
import { selectCartItems } from '../store/cart.selectors';
import { take } from 'rxjs/operators';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string = '';
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store<any>,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProduct();
    });
  }

  getProduct() {
    const url = `http://localhost:8000/api/products/${this.productId}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToCart() {
    const productWithQuantity = {
      ...this.product,
      quantity: this.quantity
    };

    this.store.pipe(
      select(selectCartItems),
      take(1)
    ).subscribe((items) => {
      const isProductInCart = items.some((item: any) => item.id === productWithQuantity.id);
      if (!isProductInCart) {
        this.store.dispatch(addToCart({ product: productWithQuantity }));
  
        this.toastr.success('Produto adicionado ao carrinho com sucesso', 'Parabéns', {
          positionClass: 'toast-top-right',
        });
      } else {
        this.toastr.warning('O produto já está no carrinho', 'Atenção', {
          positionClass: 'toast-top-right',
        });
      }
    });

    this.quantity = 1;
  }
}
