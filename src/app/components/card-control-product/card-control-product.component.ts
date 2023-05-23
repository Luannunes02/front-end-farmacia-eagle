import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-control-product',
  templateUrl: './card-control-product.component.html',
  styleUrls: ['./card-control-product.component.scss']
})

export class CardControlProductComponent {
  @Input() product: any; 

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  @Output() productRemoved: EventEmitter<string> = new EventEmitter<string>();

  removeProduct() {
    const url = `http://localhost:8000/api/products/${this.product.id}`;
    this.http.delete(url).subscribe(
      (response) => {        
        this.toastr.success('Produto removido do carrinho com sucesso', 'Parabéns', {
          positionClass: 'toast-top-right',
        });
        this.productRemoved.emit(this.product.id);
      },
      (error) => {
        console.error('Erro ao remover o produto:', error);
      }
    );
  }
}
