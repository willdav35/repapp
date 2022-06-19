import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map} from "rxjs/operators";

@Injectable()
export class Store{
   
    
    constructor(private http: HttpClient){}
    products: any=[];
  
  
  getproducts(){

   return this.http.get<[]>('http://localhost:8888/api/products')
   .pipe(map(data =>{
    this.products=data;
return;
   }));
  }}
   