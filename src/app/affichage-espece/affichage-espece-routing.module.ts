import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffichageEspecePage } from './affichage-espece.page';

const routes: Routes = [
  {
    path: '',
    component: AffichageEspecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffichageEspecePageRoutingModule {}
