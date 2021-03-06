import { Component, OnInit } from '@angular/core';
import { MedicinskaSestra } from 'src/app/models/medicinskas/medicinskas';
import { MedicinskaSestraService } from 'src/app/services/medicinska-sestra-service/medicinska-sestra.service';

@Component({
  selector: 'app-profil-med-sestra',
  templateUrl: './profil-med-sestra.component.html',
  styleUrls: ['./profil-med-sestra.component.css']
})
export class ProfilMedSestraComponent implements OnInit {

  medSestra : MedicinskaSestra = new MedicinskaSestra();

  constructor(private medService:MedicinskaSestraService) {
    this.medService.getUlogovanKorisnik()
    .subscribe(ulogovanKorisnik => {
      this.medSestra = ulogovanKorisnik;
    });
   }

  ngOnInit() {
    this.medService.getUlogovanKorisnik()
    .subscribe(ulogovanKorisnik => {
      this.medSestra = ulogovanKorisnik;
    });
  }

}
