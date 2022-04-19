import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavParams, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-ajouter-alerte',
  templateUrl: './ajouter-alerte.page.html',
  styleUrls: ['./ajouter-alerte.page.scss'],
})
export class AjouterAlertePage{

  alertes = [];


  alerte: any = {};

  loader: any;
  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidEnter() {
    this.fetchUsers();
  }

  fetchUsers() {

    this.http.get("http://localhost:3000/alertes").subscribe((res: any) => {
      console.log(res);
      this.alertes = res.data;
    });
  }
  CloseModals(){
    this.modalCtrl.dismiss(this.alerte);
  }
  submit() {
    this.http.post("http://localhost:3000/alerte", this.alerte).subscribe((res: any) => {
     
      this.toastCtrl.create({ duration: 3000, message: "L'alerte " + this.alerte.libelle + " créée." }).then(t => t.present());
    });
    this.modalCtrl.dismiss(this.alerte);
  }

}
