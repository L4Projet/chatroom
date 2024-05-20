import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangerpassPage } from './changerpass.page';

const routes: Routes = [
  {
    path: '',
    component: ChangerpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangerpassPageRoutingModule {}
