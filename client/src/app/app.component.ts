import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'repclient';
products: any;
  constructor(private http: HttpClient){}

  
  ngOnInit() {
  this.getproducts();
  }


  getproducts(){

    this.http.get('https://localhost:5001/api/products').subscribe({
      next: response=> this.products=response,
    error:error=>console.log(error)
    })

  }
}