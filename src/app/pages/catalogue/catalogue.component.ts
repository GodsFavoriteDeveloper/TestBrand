import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getProducts(12).subscribe(data => {
      console.log(data);
    });
  }

}
