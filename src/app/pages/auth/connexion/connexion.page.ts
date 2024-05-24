import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {


  nom: string = '';
  prenom: string = '';
  connexionForm!: FormGroup

  constructor(public router: Router, public formbuilder: FormBuilder, public authservice: AuthService) {
    this.connexionForm = this.formbuilder.group({
      email: ['', [Validators.required,Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password: ['', [Validators.required,Validators.pattern("")]]//(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
    });
  }

  get connexionControls() {
    return this.connexionForm.controls
  }

  ngOnInit() {

  }



  inscriptionPage() {
    this.router.navigate(["inscription"])
  }

  gotohome() {


    if (this.connexionForm.valid) {
      const mail = this.connexionForm.value.email
      const pass = this.connexionForm.value.password
      this.authservice.login(mail,pass)
    } else {
      alert("Formulaire invalid")
    }
  }

  connecavecgoogle(){
    return this.authservice.connectgoogle()
  }

  changermotdepass(){
    this.router.navigate(['changerpass'])
  }
}
