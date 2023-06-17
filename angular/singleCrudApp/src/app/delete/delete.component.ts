import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  productId:number=0;
  //productId: any;
  products:Product[]=[];
constructor(private productService: ProductService) {}


ngOnInit(): void {
}

deleteProduct(id:number): void {
 
    this.productService.deleteProductById(this.productId).subscribe(
        (data) => {
          this.products=this.products.filter(item=>item.productId!==id);
          // Perform any additional actions after deletion if needed
        },
        (error) => {
          console.log('Failed to delete product', error);
          // Handle the error if the deletion fails
        }
      );
      }
  
  
}
