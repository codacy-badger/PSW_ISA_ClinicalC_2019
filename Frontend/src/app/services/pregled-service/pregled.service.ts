import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pregled} from '../../models/pregled/pregled';
import {Lekar} from '../../models/lekar/lekar';
import {PregledIzvestajDTO} from '../../models/pregledIzvestajDTO/pregled-izvestaj-dto';
import {PregledDTO} from '../../models/PregledDTO/pregled-dto';
import {Observable} from "rxjs";

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PregledService {

  constructor(private http: HttpClient) { }

  getPreglede(jboLekara: number) {
    const jbo = JSON.stringify(jboLekara);
    return this.http.post('/server/pregled/allPregledeByLekar', jbo, httpOptions);
  }

  zavrsenPregled(p: PregledIzvestajDTO) {
    const pregled = JSON.stringify(p);
    console.log(pregled);
    return this.http.post('/server/pregled/zavrsenPregled', pregled, httpOptions);
  }

  getZakazane(jboLekara: string, jboPacijenta: string) {
    const body = JSON.stringify({jboLekara, jboPacijenta})
    return this.http.post('/server/pregled/getZakazane', body, httpOptions);
  }

  getZakazaneSestra(jboPacijenta: string) {
    const body = JSON.stringify(jboPacijenta);
    return this.http.post('/server/pregled/getZakazaneSestra', body, httpOptions);
  }

  getPredefinisane(jboLekar){
    return this.http.post<PregledDTO[]>('/server/pregled/getAllPregledeByLekar', jboLekar, httpOptions);
  }

  getAllPreglede(): Observable<PregledDTO[]>{
    return this.http.get<PregledDTO[]>('/server/pregled/getAll', httpOptions);
  }
}
