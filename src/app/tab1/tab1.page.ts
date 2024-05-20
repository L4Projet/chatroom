import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public authserv: AuthService,public router:Router) {

  }

  logout(){
    this.authserv.logout().then(()=>{
      this.router.navigate(['connexion'])
    }).catch(()=>{
      alert("Erreur de deconnexion")
    });
  }

}
