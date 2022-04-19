import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiderMissionPage } from './valider-mission.page';

const routes: Routes = [
  {
    path: '',
    component: ValiderMissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiderMissionPageRoutingModule {}
