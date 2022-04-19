import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEspecePageRoutingModule } from './detail-espece-routing.module';

import { DetailEspecePage } from './detail-espece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEspecePageRoutingModule
  ],
  declarations: [DetailEspecePage]
})
export class DetailEspecePageModule {}
