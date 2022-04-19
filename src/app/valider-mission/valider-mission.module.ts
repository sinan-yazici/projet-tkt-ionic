import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderMissionPageRoutingModule } from './valider-mission-routing.module';

import { ValiderMissionPage } from './valider-mission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderMissionPageRoutingModule
  ],
  declarations: [ValiderMissionPage]
})
export class ValiderMissionPageModule {}
