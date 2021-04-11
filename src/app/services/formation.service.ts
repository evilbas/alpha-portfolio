import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formation } from '../modeles/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  //Method Get Retournant Des Formations
  getMyFormation():Observable<Formation[]>{
    let hostname:string = environment.hostname
    return this.http.get<Formation[]>(hostname + '/formations')
  }

  getOneFormation(id: number): Observable<Formation>{
    let hostname = environment.hostname
    return this.http.get<Formation>(hostname + '/formations/' + id)
  }

  addFormation(formation: Formation, id: number): Observable<Formation>{
    let hostname = environment.hostname
    return this.http.post<Formation>(hostname + '/formations/' + id, formation, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }
}
