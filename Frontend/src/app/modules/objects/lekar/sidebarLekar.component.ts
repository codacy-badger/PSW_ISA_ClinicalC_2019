import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-and-register-service/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sidebarlekar',
  templateUrl: './sidebarLekar.component.html',
  styleUrls: ['./sidebarLekar.component.css']
})
export class SidebarLekarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private loginService : LoginService) { }

  ngOnInit() {
  }

  odjava(){
    this.loginService.odjava().subscribe(data => {
      alert("Uspešno ste se odjavili!")
    });
}
}
