import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionAdminPageRoutingModule } from './mission-admin-routing.module';

import { MissionAdminPage } from './mission-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionAdminPageRoutingModule
  ],
  declarations: [MissionAdminPage]
})
export class MissionAdminPageModule {}
