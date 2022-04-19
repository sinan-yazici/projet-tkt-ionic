import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoadingController, ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulaire-valider-mission',
  templateUrl: './formulaire-valider-mission.page.html',
  styleUrls: ['./formulaire-valider-mission.page.scss'],
})
export class FormulaireValiderMissionPage {

  missions = [];


  mission: any = {};
  ValiderMission: any = {};

  constructor(  private http: HttpClient,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private navParams: NavParams) {
      this.mission = this.navParams.data;

     }

     closeModals(){
      this.modalCtrl.dismiss(this.mission);
    }

    changeValueValider(SelectedValue){
      this.mission.valider = SelectedValue;
    }

  ngOnInit() {
  }


 submit() {
    this.ValiderMission = {"valider": this.mission.valider,"commentaire": this.mission.commentaire};
    this.http.put(`http://localhost:3000/missions/valider/${this.mission.id}`, this.ValiderMission).subscribe((res: any) => {
      this.toastCtrl.create({ duration: 3000, message: "Modification de l'état réussie." }).then(t => t.present());
    });
    this.modalCtrl.dismiss(this.mission);
  } 
}
