import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-changerpass',
  templateUrl: './changerpass.page.html',
  styleUrls: ['./changerpass.page.scss'],
})
export class ChangerpassPage implements OnInit {
  email: string = ''

  constructor(public authserv: AuthService, public router: Router) { }

  ngOnInit() {
  }

  modifierPass(){
    this.authserv.changePassword(this.email).then(()=>{
      alert("Un email vous a ete envoye pour vous permettre de modifier votre mot de pass")
      this.router.navigate(['connexion'])
    }).catch(()=>{
      alert("Erreur lors de l'envoie de l'email")
    })
  }

}
