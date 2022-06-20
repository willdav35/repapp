import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store.services";

@Component({
  selector: "product-list",
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})

export default class ProductComponent implements OnInit {

    

constructor(public store: Store){
    
}
// relying on the binding of the store 
ngOnInit(): void {
  this.store.getproducts()
  .subscribe(()=>{
    //do something
  });
}





    

  
}