import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../modeles/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getMyBlog(id: number): Observable<Blog>{
    let host = environment.hostname
    return this.http.get<Blog>(host+'/blog/' + id, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }


  addBlog(blog: Blog, idProfil: number): Observable<Blog>{
    let host = environment.hostname
    return this.http.post<Blog>(host+'/blog/' + idProfil, blog, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }
}
