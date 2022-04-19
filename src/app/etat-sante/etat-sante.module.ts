import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EtatSantePageRoutingModule } from './etat-sante-routing.module';

import { EtatSantePage } from './etat-sante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatSantePageRoutingModule,
    HttpClientModule
  ],
  declarations: [EtatSantePage]
})
export class EtatSantePageModule {}
