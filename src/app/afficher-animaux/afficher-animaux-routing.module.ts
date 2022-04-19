import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficherAnimauxPage } from './afficher-animaux.page';

const routes: Routes = [
  {
    path: '',
    component: AfficherAnimauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficherAnimauxPageRoutingModule {}
