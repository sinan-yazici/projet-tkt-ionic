import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AfficherAnimauxPageRoutingModule } from './afficher-animaux-routing.module';

import { AfficherAnimauxPage } from './afficher-animaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficherAnimauxPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AfficherAnimauxPage]
})
export class AfficherAnimauxPageModule {}
