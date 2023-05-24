import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';
  loading: boolean = true;
  isLoadingProducts: boolean = false;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadProductsFromAPI();
  }

  loadProductsFromAPI() {
    this.http.get<any[]>('http://localhost:8000/api/products').subscribe(
      (response) => {
        this.products = response;
        this.filteredProducts = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  loadProducts() {
    if (this.isLoadingProducts) {
      return; // Retorna se a função já estiver em andamento
    }
    
    this.isLoadingProducts = true;
    this.http.get<any>('/assets/products/products.json').subscribe(
      (response) => {
        const productsToAdd = response.productsJSON;
        this.toastr.warning('Os produtos estão sendo carregados, aguarde por favor!', 'Aguarde', {
          positionClass: 'toast-top-right',
        });
        const postRequests = productsToAdd.map((product: any) => {
          return this.http.post('http://localhost:8000/api/products', product);
        });

        forkJoin(postRequests).subscribe(
          () => {
            this.loadProductsFromAPI();
            this.isLoadingProducts = false;
          },
          (error: any) => {
            console.error(error);
            this.loading = false;
            this.isLoadingProducts = false;
          }
        );
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.isLoadingProducts = false;
      }
    );
  }

  searchProducts() {
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });
    } else {
      this.filteredProducts = this.products;
    }
  }
}
