import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:Array<any>=[]
  product:any;
  delete:boolean=false;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
   this.productList=this.productservice.returnProduct();
  }
ondelete(product:any){

  this.product=product;
  this.delete=true;
}
onyes(){
let i=this.productList.indexOf(this.product)
this.productList.splice(i,1)
this.delete=false;
}
onNo(){
this.delete=false;

}
}


// /dashboard

// /product-list
// /product-create
// /product-edit/:id
// /product-view/:id

// /user-list
// /user-create
// /user-edit/:id
// /user-view/:id

// https://startbootstrap.com/previews/sb-admin