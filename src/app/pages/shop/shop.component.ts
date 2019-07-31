import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  categories: any;

  constructor(private dataService: DataService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getAttributes();
    this.getProducts();
    this.getCategories();
  }

  getCategories() {
    this.spinner.show();
    this.dataService.getProductCategories().subscribe(data => {
      this.spinner.hide();
      console.log(data);
      this.categories = data;
    }, error => {
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }

  getProducts() {
    this.dataService.getProducts(12, 'desc').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  getAttributes() {
    this.spinner.show();
    this.dataService.getProductAttributes().subscribe(data => {
      this.spinner.hide();
      console.log(data);
    }, error => {
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }

  categoryFilter(id) {
    this.spinner.show();
    this.dataService.getCategory(id).subscribe(data => {
      this.spinner.hide();
      this.products = data;
    }, error => {
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }



  sortFilter(order) {
    this.spinner.show();
    this.dataService.getProducts(12, order).subscribe((data) => {
      this.spinner.hide();
      console.log(data);
      this.products = data;
    }, (error) => {
      console.log(error);
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }

}
