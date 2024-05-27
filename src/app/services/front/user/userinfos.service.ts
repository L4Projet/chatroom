import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Userinfo } from 'src/app/model/user/userinfo';


@Injectable({
  providedIn: 'root'
})
export class UserinfosService {

  constructor(public afs: AngularFirestore) { }

  saveUserInfo(user: Userinfo){
    return this.afs.collection('UserInfo').add(user);
  }

  //methode permettant de lister tous es utilisateurs dans la collection userinfo
  getAllusersinfos(userEmail: string){
    return this.afs.collection('UserInfo', ref => ref.where('email', '==', userEmail))
      .valueChanges();
  }
}
