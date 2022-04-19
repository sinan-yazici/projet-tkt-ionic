import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutUtilisateurPage } from './ajout-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutUtilisateurPageRoutingModule {}
