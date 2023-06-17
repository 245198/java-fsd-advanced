import { Component,OnInit} from '@angular/core';
import { ProductService } from '../service/product.service';
import {Product} from 'src/app/model/Product';
import {Router } from '@angular/router';
@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{
  constructor(private service:ProductService,private router:Router)
  {
    
  }
  products: Product[]=[];
  
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  deleteProduct(id:number): void {
    
    this.service.deleteProductById(id).subscribe(
        (data) => {
          this.products=this.products.filter(item=>item.productId!==id);
          this.gotoProductList();
          // Perform any additional actions after deletion if needed
        },
        (error) => {
          console.log('Failed to delete product', error);
          // Handle the error if the deletion fails
        }
      );
      }

  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products = products;
  });

  }
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }


  

  
}
