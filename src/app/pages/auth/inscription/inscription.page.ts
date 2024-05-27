import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userinfo } from 'src/app/model/user/userinfo';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserinfosService } from 'src/app/services/front/user/userinfos.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  nom: string = '';
  prenom: string = '';
  connexionForm!: FormGroup

  constructor(
    public router: Router,
    public formbuilder: FormBuilder,
    public authservice: AuthService,
    public afs: AngularFirestore,
    public userService: UserinfosService
  ) {
    this.connexionForm = this.formbuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
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

  inscription() {


    if (this.connexionForm.valid) {
      const mail = this.connexionForm.value.email
      const pass = this.connexionForm.value.password
      const dateajout = new Date()
      const userInfo: Userinfo = {
        id: this.afs.createId(),
        nomcomplet: this.connexionForm.value.fullname,
        email: this.connexionForm.value.email,
        country: '',
        telephone: '',
        gender: '',
        adressone: '',
        adresstwo: '',
        postalCode: '',
        towncity: '',
        street: '',
        biodesc: '',
        password: '',
        photoCouverture: '',
        photoProfile: '',
        dateInscription: dateajout.toISOString()
      }
      this.userService.saveUserInfo(userInfo).then(()=>{
        console.log("informations enregistrees dans la base de donnees avec success");
        
      }).catch(err => {
        console.log("impossible d'enregistrer les infos");
        
      });
      this.authservice.register(mail, pass)


    } else {
      alert("Formulaire invalid")
    }
  }



}
