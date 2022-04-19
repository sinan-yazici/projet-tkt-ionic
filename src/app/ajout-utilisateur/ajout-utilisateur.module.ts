import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AjoutUtilisateurPageRoutingModule } from './ajout-utilisateur-routing.module';

import { AjoutUtilisateurPage } from './ajout-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutUtilisateurPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AjoutUtilisateurPage]
})
export class AjoutUtilisateurPageModule {}
