import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireValiderMissionPageRoutingModule } from './formulaire-valider-mission-routing.module';

import { FormulaireValiderMissionPage } from './formulaire-valider-mission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireValiderMissionPageRoutingModule
  ],
  declarations: [FormulaireValiderMissionPage]
})
export class FormulaireValiderMissionPageModule {}
