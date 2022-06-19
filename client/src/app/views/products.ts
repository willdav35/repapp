import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store.services";

@Component({
  selector: "product-list",
  templateUrl: "products.html"
})

export default class Products implements OnInit {

    

constructor(public store: Store){
    
}

ngOnInit(): void {
  this.store.getproducts()
  .subscribe();
}





    

  
}