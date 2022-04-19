import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionAdminPage } from './mission-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MissionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionAdminPageRoutingModule {}
