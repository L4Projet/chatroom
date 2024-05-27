import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/front/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'changerpass',
    loadChildren: () => import('./pages/auth/changerpass/changerpass.module').then( m => m.ChangerpassPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/front/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },  {
    path: 'user-name',
    loadChildren: () => import('./pages/front/modalinfo/user-name/user-name.module').then( m => m.UserNamePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
