import { Component, OnInit } from '@angular/core';
import { Klinika } from 'src/app/models/klinika/klinika';
import { KlinikaService} from '../../../services/klinika-service/klinika.service';
import { Sala } from 'src/app/models/sala/sala';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profil-klinikeComponent.html',
  styleUrls: ['./profil-klinikeComponent.css']
})
export class ProfilKlinikeComponent implements OnInit {

 klinika:Klinika= new Klinika();
 sale: Sala[];

 fullAdresa : String

  constructor(private klinikaService : KlinikaService,private router:Router) {
   }

  ngOnInit() {
    this.klinika=history.state.data;
    this.fullAdresa = this.klinika.adresa + "," + this.klinika.grad + "," + this.klinika.drzava
  }

  lekariNavigate(event){
        var testdatum=null;
      this.router.navigate(['/listaLekara'],{state:{klinika:this.klinika,datum:testdatum}});

  }
  predefinisaniNavigate(event){
  this.router.navigate(['/listaPredefinisanih'],{state:{klinika:this.klinika.id}});
}
 listaSalaNavigate(event){
  this.router.navigate(['/listaSala'],{state:{klinika:this.klinika}});
 }

}
