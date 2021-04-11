import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/modeles/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

blogId: number
monBlog: Blog

  constructor(private blogService: BlogService,
              private activeRoute: ActivatedRoute) { 
                this.blogId = this.activeRoute.snapshot.params.id
              }
  title: string = "Présentation"

  ngOnInit(): void {
    this.blogService.getMyBlog(this.blogId).subscribe(
      response => {
        this.monBlog = response
      }
    )
  }

    
}
