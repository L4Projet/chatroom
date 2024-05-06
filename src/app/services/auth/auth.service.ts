import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authServ : AngularFireAuth) { }

  async login(email: string, password: string) {
    return await this.authServ.signInWithEmailAndPassword(email, password);
  }

  //Methode permettant de s'inscrire
  async register(email: string, password: string) {
    return await this.authServ.createUserWithEmailAndPassword(email, password);
  }

  //Methode permettant de se déconnecter
  async logout() {
    return await this.authServ.signOut();
  }
  //Methode permettant de savoir si l'utilisateur est connecté
  async isLoggedIn() {
    return (await this.authServ.currentUser)? true : false;
  }

  //Methode permettant de récupérer l'utilisateur connecté
  async getLoggedInUser() {
    return await this.authServ.currentUser;
  }

  //Methode permettant de changer le mot de passe de l'utilisateur
  async changePassword(email: string) {
    return await this.authServ.sendPasswordResetEmail(email);
  }

  //Methode permettant de verifier l'addresse email de l'utilisateur

}
