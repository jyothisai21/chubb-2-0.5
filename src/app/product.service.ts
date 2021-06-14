
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData:Array<any>=[];
  constructor() { }
  addProduct(data:any){
    data.id=this.productData.length+1;
    this.productData.push(data)
  }
  returnProduct(){
    return this.productData;
  }
  returnproductById(id:number){
    return this.productData.find(p=>p.id==id)
  }
  updateProductById(id:any,data:any){
    let index=this.productData.findIndex(p=>p.id==id)
    data.id=id;
    this.productData[index]=data;
  }
}


