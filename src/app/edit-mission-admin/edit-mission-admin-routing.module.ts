import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMissionAdminPage } from './edit-mission-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EditMissionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMissionAdminPageRoutingModule {}
