import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatSantePage } from './etat-sante.page';

const routes: Routes = [
  {
    path: '',
    component: EtatSantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatSantePageRoutingModule {}
