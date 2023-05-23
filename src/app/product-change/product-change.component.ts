import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.scss']
})
export class ProductChangeComponent implements OnInit {
  product = {
    id: '',
    name: '',
    photo: '',
    description: '', 
    price: 0
  };
  selectedImage: any | ArrayBuffer | null = null;
  id = '';
  existingImageUrl = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.id = productId;
      this.loadProduct(productId);
    } else {
      this.router.navigate(['/products']);
    }
  }

  loadProduct(productId: string) {
    const url = `http://localhost:8000/api/products/${productId}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        this.product = response;
        this.existingImageUrl = response.photo;
      },
      (error) => {
        console.error('Error loading product', error);
        this.toastr.error('Erro ao carregar produto', 'Erro');
        this.router.navigate(['/products']);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updateProduct() {   
    const Data = {
      name: this.product.name,
      photo: this.selectedImage === null ?this.existingImageUrl : this.selectedImage,
      description: this.product.description,
      price: this.product.price
    }

    const url = `http://localhost:8000/api/products/${this.id}`;    
    this.http.put(url, Data).subscribe({
      next: (response) => {
        this.toastr.success('Produto atualizado com sucesso', 'Sucesso');
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Error updating product', error);
        this.toastr.error('Favor escolher uma imagem mais leve', 'Erro', {
          positionClass: 'toast-top-right',
        });
      }
    });
  }
}
