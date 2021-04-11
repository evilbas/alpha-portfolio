import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profil } from '../modeles/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  getMyProfil(id: number):Observable<Profil>{
    let host = environment.hostname
    return this.http.get<Profil>(host+'/profils/' + id, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }

  createProfil(profil: Profil): Observable<Profil>{
    let host = environment.hostname
    return this.http.post<Profil>(host+'/profils', profil, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }

  updateProfil(profil: Profil): Observable<Profil>{
    let host = environment.hostname
    return this.http.put<Profil>(host+'/profils/' + profil.idProfil, profil, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }

  getProfil(id: number): Observable<Profil>{
    let host = environment.hostname
    return this.http.get<Profil>(host + '/profils/' + id, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }})
  }

}
