import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProductCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

}
