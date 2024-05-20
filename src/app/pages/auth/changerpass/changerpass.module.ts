import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerpassPageRoutingModule } from './changerpass-routing.module';

import { ChangerpassPage } from './changerpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangerpassPageRoutingModule
  ],
  declarations: [ChangerpassPage]
})
export class ChangerpassPageModule {}
