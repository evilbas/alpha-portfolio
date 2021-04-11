import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../modeles/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getMyExperience():Observable<Experience[]>{
    let host = environment.hostname
    return this.http.get<Experience[]>(host+'/experiences')
  }


  addExperience(experience: Experience, idFormation: number): Observable<Experience>{
    let hostname = environment.hostname
    return this.http.post<Experience>(hostname + '/experiences/' + idFormation, experience, {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
  }

}
