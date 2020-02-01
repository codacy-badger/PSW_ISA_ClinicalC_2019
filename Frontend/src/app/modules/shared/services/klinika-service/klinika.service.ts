import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Klinika} from '../../../../models/Klinika/klinika';
import { Sala } from 'src/app/models/sala/sala';
import { Pregled } from 'src/app/models/pregled/pregled';
import { Operacija } from 'src/app/models/operacija/operacija';
import { Lekar } from 'src/app/models/lekar/lekar';
import { Zahtev } from 'src/app/models/zahtev/zahtev';
import { Message } from 'src/app/models/message/message';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  constructor(private http: HttpClient) {
  }

  public findByNaziv(): Observable<Klinika> {
    return this.http.get<Klinika>('/server/klinika/registracijaKlinike');
  }

  public save(klinika: Klinika) {
    const k = JSON.stringify(klinika)
    return this.http.post<Klinika>('/server/klinika/registracijaKlinike', k, httpOptions);
  }

  public getKlinike() {
    return this.http.get<Klinika>('/server/klinika/all', httpOptions);
  }

  public getSale(id : number): Observable<Sala[]> {
    return this.http.post<Sala[]>('/server/klinika/getSale', id, httpOptions);
  }

  public getSaleSlobodneOd(zahtev : Zahtev): Observable<Sala[]> {
    return this.http.post<Sala[]>('/server/klinika/getSaleSlobodneOd', JSON.stringify(zahtev), httpOptions);
  }

  public update(klinika: Klinika, id: number){
    klinika.id = id;
    const k = JSON.stringify(klinika)
    return this.http.post<Klinika>('/server/klinika/update', k, httpOptions);
  }

  public removeSala(id: number) {
    return this.http.post<Sala>('/server/klinika/removeSala' , id, httpOptions);
  }

  public getOperacije(sala: Sala) {
    return this.http.post<Operacija>('/server/klinika/getOperacije' , sala.id, httpOptions);
  }

  public getPregledi(sala: Sala) {
    return this.http.post<Pregled>('/server/klinika/getPregledi' , sala.id, httpOptions);
  }

  public registerSala(sala: Sala) {
    const s = JSON.stringify(sala)
    return this.http.post<Sala>('/server/klinika/registerSala' , s, httpOptions);
  }

  public getLekariOperacije(op : Operacija) {
    return this.http.post<Lekar[]>('/server/klinika/getLekariOperacije', JSON.stringify(op), httpOptions);
  }

  public getZahtevi(id : number) {
    return this.http.post<Zahtev[]>('/server/klinika/getZahtevi', id, httpOptions);
  }

  public zakaziOperaciju(operacija : Operacija) {
    return this.http.post<Message>('/server/klinika/zakaziOperaciju', JSON.stringify(operacija), httpOptions);
  }

  public zakaziPregled(pregled : Pregled) {
    return this.http.post<Message>('/server/klinika/zakaziPregled', JSON.stringify(pregled), httpOptions);
  }

  public removeZahtev(id : number) {
    return this.http.post<Boolean>('/server/klinika/removeZahtev', id, httpOptions);
  }

}
