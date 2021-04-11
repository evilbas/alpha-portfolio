import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/modeles/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {

  blog: Blog

  formGroup: FormGroup
  profilId: number
  description: string = "Bonjour je m'appelle BA Abdoulaye, j'ai 27 ans."
  constructor(private blogService: BlogService, 
              private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router) {
                this.profilId = this.activeRoute.snapshot.params.id
               }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      presentation: ['', Validators.required],
      free: ['', Validators.required],
      divertissement: ['', Validators.required],
    })
  }

  onAddBlog(){
    this.blogService.addBlog(this.formGroup.value, this.profilId).subscribe(
      response =>{
        this.blog = response
        return this.router.navigateByUrl("blog/" + this.blog.idBlog)
      }
    )
  }
}
