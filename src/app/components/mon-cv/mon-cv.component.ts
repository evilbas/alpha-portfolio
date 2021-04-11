import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-cv',
  templateUrl: './mon-cv.component.html',
  styleUrls: ['./mon-cv.component.scss']
})
export class MonCvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  createProfil(){
    return this.router.navigateByUrl("/profil-create")
  }

  createBlog(){
    return this.router.navigateByUrl("/blog-add")
  }

}
