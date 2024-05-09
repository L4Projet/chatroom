import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authServ : AngularFireAuth, public router : Router) { }

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

  //Methode permettant a l'utilisateur de ce connecté avec sont compte google
  async connectgoogle () {
      this.authServ.signInWithPopup(new GoogleAuthProvider).then((res: any) => {
      if(res.user){
        this.router.navigate(["tabs"])
      }else{
        console.log("impossible de se connecter avec google");

      }
    })
  }

}
