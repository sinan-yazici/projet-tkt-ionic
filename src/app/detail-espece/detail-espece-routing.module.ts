import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEspecePage } from './detail-espece.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEspecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEspecePageRoutingModule {}
