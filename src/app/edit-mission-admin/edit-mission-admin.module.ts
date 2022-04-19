import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMissionAdminPageRoutingModule } from './edit-mission-admin-routing.module';

import { EditMissionAdminPage } from './edit-mission-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMissionAdminPageRoutingModule
  ],
  declarations: [EditMissionAdminPage]
})
export class EditMissionAdminPageModule {}
