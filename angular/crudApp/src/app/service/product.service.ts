import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../model/Product';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:8090/product/api.2.0/delete';
  constructor(private http: HttpClient) { }
  getProducts()
  {
    return this.http.get<Product[]>('http://localhost:8090/product/api.2.0/retrieve/all')
  }
  saveProduct(product:Product):
  Observable<Object>{
    return this.http.post( 'http://localhost:8090/product/api.2.0/create',product)
  }


  
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8090/product/api.2.0/retrieve/${id}`);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.http.put(`http://localhost:8090/product/api.2.0/update`, product);
  }

  deleteProductById(id: number): Observable<Object> {
    return this.http.delete<Product>(`http://localhost:8090/product/api.2.0/delete/${id}`);
  }
}

