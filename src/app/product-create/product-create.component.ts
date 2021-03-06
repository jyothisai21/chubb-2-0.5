import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  productForm:any;

  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.productForm=this.fb.group({
      productname:this.fb.control("",Validators.required),
      productprice:this.fb.control(0,Validators.required),
      discount:this.fb.control(0,[Validators.min(0),Validators.max(5)]),
      producttype:this.fb.control("",Validators.required),
    })
  }
  SubmitForm(){
    this.productService.addProduct(this.productForm.value)
    this.route.navigate(["/product"])
  }
 

}
