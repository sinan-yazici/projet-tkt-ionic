import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffichageEspecePageRoutingModule } from './affichage-espece-routing.module';

import { AffichageEspecePage } from './affichage-espece.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffichageEspecePageRoutingModule,
    HttpClientModule
  ],
  declarations: [AffichageEspecePage]
})
export class AffichageEspecePageModule {}
