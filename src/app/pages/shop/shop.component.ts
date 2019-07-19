import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  categories: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAttributes();
    this.getProducts();
    this.getCategories();
  }

  getCategories() {
    this.dataService.getProductCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  getProducts() {
    this.dataService.getProducts(12, 'desc').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  getAttributes() {
    this.dataService.getProductAttributes().subscribe(data => {
      console.log(data);
    });
  }

  categoryFilter(id) {
    this.dataService.getCategory(id).subscribe(data => {
      this.products = data;
    });
  }



  filterProducts(category) {

  }

}
