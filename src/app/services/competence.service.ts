import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from '../modeles/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }

  getMyCompetence(): Observable<Competence[]>{
    let host = environment.hostname
    return this.http.get<Competence[]>(host+'/competences', {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
  }

  addCompetence(competence: Competence, idFormation: number): Observable<Competence>{
    let hostname = environment.hostname
    return this.http.post<Competence>(hostname + '/competences/' + idFormation, competence, {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
  }

  deleteCompetence(c: Competence): Observable<boolean>{
    let host = environment.hostname
    return this.http.delete<boolean>(host+'/competences/' + c.idCompetence)
  }



}
