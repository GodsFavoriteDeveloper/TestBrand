import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const postId = paramMap.get('postId');
      console.log(postId);
      this.dataService.getPost(postId).subscribe(data => {
        console.log(data);
        this.post = data.post;
        console.log(data.post.content);
      });
    });
  }

}
