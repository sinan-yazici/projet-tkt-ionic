import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { FormulaireValiderMissionPage } from '../formulaire-valider-mission/formulaire-valider-mission.page';

@Component({
  selector: 'app-valider-mission',
  templateUrl: './valider-mission.page.html',
  styleUrls: ['./valider-mission.page.scss'],
})
export class ValiderMissionPage implements OnInit {


  
  id = 5;
  missions;
  constructor(private http: HttpClient, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertController: AlertController) { }


  MissionParUser(){
    let id = this.id;
    this.missions = null;
    this.readAPI(`http://localhost:3000/missions/user/${id}`)
      .subscribe((data) => {
        this.missions =data['mission'];      
    });
  }

  ngOnInit() {
    this.MissionParUser();
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  ValiderMission(mission){
    this.modalCtrl.create({
      component: FormulaireValiderMissionPage,
      componentProps: mission
      }).then( modalres =>{
      modalres.present();
  
      modalres.onDidDismiss().then( res=>{
        if(res.data != null){
          this.MissionParUser();
  }
})
})
}

}
