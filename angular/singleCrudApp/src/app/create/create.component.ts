import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  
  product : Product = new Product();
  constructor(private productService: ProductService,private route:ActivatedRoute,
    private router:Router)
  {}
  ngOnInit(): void {
   
   
    
  }

  onSubmit()
  {
       
  this.saveProduct();
  console.log(this.product);
    
  }

saveProduct()
  {
  this.productService.saveProduct(this.product).subscribe(data=>
  {
    console.log(data);
    this.gotoProductList();
  },error=>console.log(error));
  
  }
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }
}
