import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  name: string = '';
  imageLink: string = '';
  description: string = '';
  price: string = '';
  selectedImage: any | ArrayBuffer | null = null;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.imageLink = e.target.result;
      };
      reader.readAsDataURL(file);
    }    
  }

  addProduct() {
    if(this.name === "" || this.description === "" || this.price === "") {
      this.toastr.warning('Para adicionar um produto preencha pelo menos nome, descrição e preço', 'Aviso', {
        positionClass: 'toast-top-right',
      });
      return;
    } 

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('photo', this.selectedImage!);
    formData.append('description', this.description);
    formData.append('price', this.price);     

    this.http.post('http://localhost:8000/api/products', formData)
      .subscribe(
        (response) => {
          this.toastr.success('Produto criado com sucesso', 'Parabéns', {
            positionClass: 'toast-top-right',
          });
        },
        (error) => {
          console.error('Error adding product', error);                            
          this.toastr.error('Favor escolher uma imagem mais leve', 'Erro', {
            positionClass: 'toast-top-right',
          });
        }
      );

    this.name = '';
    this.imageLink = '';
    this.description = '';
    this.price = '';
    this.selectedImage = null;
  }
}
