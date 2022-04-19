import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modifier-alerte',
  templateUrl: './modifier-alerte.page.html',
  styleUrls: ['./modifier-alerte.page.scss'],
})
export class ModifierAlertePage {

  alertes = [];


  alerte: any = {};
  ModifierAlerte: any = {};

  loader: any;
  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.alerte = this.navParams.data;
  }

  closeModals(){
    this.modalCtrl.dismiss(this.alerte);
  }

  changeValueGravite(SelectedValue){
    this.alerte.gravite = SelectedValue;
  }

  ionViewDidEnter() {
    this.fetchUsers();
  }

  fetchUsers() {

    this.http.get("http://localhost:3000/alertes").subscribe((res: any) => {
      
      this.alertes = res.data;
    });
  }

  submit() {
    this.ModifierAlerte = {"libelle": this.alerte.libelle,"description": this.alerte.description,"localisation":this.alerte.localisation,"gravite":this.alerte.gravite};
    this.http.put(`http://localhost:3000/alerte/${this.alerte.id}`, this.ModifierAlerte).subscribe((res: any) => {
      this.toastCtrl.create({ duration: 3000, message: "L'alerte " + this.alerte.libelle + " à bien été modifiée." }).then(t => t.present());
    });
    this.modalCtrl.dismiss(this.alerte);
  }

}

