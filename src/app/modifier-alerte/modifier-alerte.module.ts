import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierAlertePageRoutingModule } from './modifier-alerte-routing.module';

import { ModifierAlertePage } from './modifier-alerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierAlertePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifierAlertePage]
})
export class ModifierAlertePageModule {}
