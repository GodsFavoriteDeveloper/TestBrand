import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  loadingMessage = 'Loading Products...';
  @Input() productCount: number;

  constructor(private dataService: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.spinner.show();
    this.dataService.getProducts(this.productCount).subscribe((data) => {
      this.spinner.hide();
      console.log(data);
      this.products = data;
    }, (error) => {
      console.log(error);
      setTimeout(() => {
        this.spinner.hide();
        this.loadingMessage = 'You seem to be offline! Please check connection';
      }, 3000);
    });
  }

}
