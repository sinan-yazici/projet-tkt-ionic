import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireValiderMissionPage } from './formulaire-valider-mission.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireValiderMissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireValiderMissionPageRoutingModule {}
