import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('Im here');
    this.dataService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    }, error => {
      console.log(error.message);
    });
  }

}
