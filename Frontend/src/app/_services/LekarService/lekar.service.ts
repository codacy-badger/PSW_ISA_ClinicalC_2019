import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lekar } from 'src/app/models/lekar/lekar';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class LekarService {

  constructor(private http: HttpClient) {
  }

  public getUlogovanKorisnik(): Observable<Lekar> {
    return this.http.get<Lekar>('/server/ulogovanKorisnik', httpOptions);
  }

  public update(lekar: Lekar) {
    const lek = JSON.stringify(lekar);
    return this.http.post<Lekar>('/server/lekar/update' , lek, httpOptions);
  }
}