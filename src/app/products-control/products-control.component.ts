import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-control',
  templateUrl: './products-control.component.html',
  styleUrls: ['./products-control.component.scss']
})
export class ProductsControlComponent {
  products: any[] = []; // Substitua 'any' pelo tipo adequado para sua aplicação

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8000/api/products').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error(error);        
      }
    );
  }
  onProductRemoved(productId: string) {
    // Atualize a lista de produtos, removendo o produto com o ID correspondente
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
