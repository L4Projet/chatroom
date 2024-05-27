import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserNamePage } from '../modalinfo/user-name/user-name.page';
import { UserinfosService } from 'src/app/services/front/user/userinfos.service';
import { Userinfo } from 'src/app/model/user/userinfo';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  userInfo: Userinfo[] = []
  userImgProfile: string | undefined

  constructor( public router: Router,
    public modalCtrl: ModalController,
    public userServ: UserinfosService
  ) { 
    this.getCurrentUserInfos("hassanebangourabusiness2707@gmail.com")
  }

  ngOnInit() {

  }

  async openusernamemodal(){
    const modal = this.modalCtrl.create({
      component: UserNamePage
    })
    return (await modal).present()
  }

  getCurrentUserInfos(email: string){
    this.userServ.getAllusersinfos(email).subscribe((res: any) => {
      this.userInfo = res.map((e: any) => {
        let data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
      if (this.userInfo) {
        this.userImgProfile = this.userInfo.map(res => res.nomcomplet).join(', ');
        console.log("Mon nom complet: " + this.userImgProfile);
      }

    });
  }

}
