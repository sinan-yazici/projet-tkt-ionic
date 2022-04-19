import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { EditMissionAdminPage } from '../edit-mission-admin/edit-mission-admin.page';

@Component({
  selector: 'app-mission-admin',
  templateUrl: './mission-admin.page.html',
  styleUrls: ['./mission-admin.page.scss'],
})
export class MissionAdminPage implements OnInit {

  missions =[];
  mode;

  constructor(public http: HttpClient,
    private modalCtrl:ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.getMissions();
  }

  // Quand on rentre dans la vue on exécute la fonction pour get les missions
  ionViewDidEnter(){
    this.getMissions();
  }

  // Récuppération de toutes les missions pour les afficher
  getMissions(){
    this.http.get("http://localhost:3000/missionsinfos").subscribe((res: any) =>{
      console.log(res);
      this.missions = res.mission;
    });
  }

   // Création d'une mission
   creer(mode){
    this.modalCtrl.create({
      component: EditMissionAdminPage
    }).then( modalres =>{
      modalres.present();
    })
  }

  // Modification de la mission selectionnée
  async modifier(mission){
    const modal = await this.modalCtrl.create({
      component: EditMissionAdminPage,
      componentProps: mission
    });
    modal.present();
    const modalData = await modal.onWillDismiss();
    if(modalData){
      this.getMissions();
    }
  }

  async showToast(message){
    await this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(res => res.present());
  }


  // Pour supprimer on affiche une alerte pour l'utilisateur
  async showAlert(mission){
    await this.alertCtrl.create({
      header:"Confirmer la suppression",
      message:"Voulez vous vraiment supprimer la mission : '"+ mission.libelle_mission+ "' ?",
      buttons:[
        { text: "Confirmer", handler: () => {

            // Sur clic du bouton confirmer => supprimer la mission via api => avertir l'utilisateur
            this.http.delete("http://localhost:3000/mission/" + mission.id).subscribe((res: any) =>{
            console.log(res);
            if(res.message == "mission supprimé"){
              this.showToast("La mission a bien été supprimée");
              this.getMissions();
            }
            else{
              this.showToast("Echec de la suppression !");
            }
            });

           } 
        },
        {
          text:"Annuler"
        }
      ]
    }).then(res => res.present());
  }

}
