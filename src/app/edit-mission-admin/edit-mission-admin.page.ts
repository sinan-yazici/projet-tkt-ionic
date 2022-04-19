import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-mission-admin',
  templateUrl: './edit-mission-admin.page.html',
  styleUrls: ['./edit-mission-admin.page.scss'],
})
export class EditMissionAdminPage implements OnInit {
  
  mission;
  users;
  enclos;
  especes;
  animaux;

  constructor(private modalCtrl: ModalController,
    private navParams: NavParams,
    public http: HttpClient,
    private toastCtrl: ToastController) { this.mission = this.navParams.data; }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getEmployes();
    this.getEnclos();
    this.getEspece();
  }

  modaldata;

  close(){
    this.modalCtrl.dismiss(this.modaldata = 1);
  }


  ChangeValueUserId(SelectedValue){
    this.mission.id_user = SelectedValue;
  }

  ChangeValueEnclosId(SelectedValue){
    this.mission.id_enclos = SelectedValue;
  }

  async showToast(message){
    await this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(res => res.present());
  }

  getEmployes(){
    this.http.get("http://localhost:3000/users").subscribe((res: any) =>{
      console.log(res);
      this.users = res.user;
    });
  }

  getEnclos(){
    this.http.get("http://localhost:3000/les-enclos").subscribe((res: any) =>{
      console.log(res);
      this.enclos = res.enclos;
    });
  }

  getEspece(){
    this.http.get("http://localhost:3000/especes").subscribe((res: any) =>{
      console.log(res);
      this.especes = res.espece;
    });
  }

  getAnimauxEspece(id){
    this.http.get("http://localhost:3000/animauxespece/" + id).subscribe((res: any) =>{
      console.log(res);
      this.animaux = res.animal;
    });
  }  

  getNewCommentaire(): string{
    if(this.mission.commentaire)return this.mission.commentaire;
    else return null;
  }
  getIdAnimal(){
    if(this.mission.id_animal)return this.mission.id_animal;
    else return null;
  }
  getIdEnclos(){
    if(this.mission.id_enclos)return this.mission.id_enclos;
    else return null;
  }

  VerifPresenceValeursObligatoires(){
    if(this.mission.libelle_mission  && this.mission.id_user && this.mission.date){
      return true
    }
    else{
      return false;
    }
  }

  sendPostRequest() {
    if(this.VerifPresenceValeursObligatoires()== true){
      let nouvelleMission = {
        "libelle": this.mission.libelle_mission,
        "commentaire": this.getNewCommentaire(),
        "id_user": this.mission.id_user,
        "date": new Date(this.mission.date).toLocaleString('fr-FR', { year:"numeric"}) + "-" + new Date(this.mission.date).toLocaleString('fr-FR', { month:'2-digit'}) + "-" + new Date(this.mission.date).toLocaleString('fr-FR', { day:'2-digit'}) + " " + new Date(this.mission.date).toLocaleString('fr-FR', { hour:'2-digit' , minute:'2-digit', second:'2-digit'}),
        "valider": "0",
        "id_animal": this.getIdAnimal(),
        "id_enclos": this.getIdEnclos(),
      }
  
      console.log(nouvelleMission);
  
      this.http.post("http://127.0.0.1:3000/mission", (nouvelleMission))
        .subscribe(data => {
          console.log(data);
          this.showToast("La mission a bien été ajoutée ..");
          this.close();
         }, error => {
          console.log(error);
          this.showToast("Erreur lors de l'ajout !");
        });
    }
    else{
      this.showToast("Merci de remplir toutes les informations obligatoires !");
    }

    
  }

  ModifMission(){
    let nouvelleMissionModif = {
      "libelle": this.mission.libelle_mission,
      "commentaire": this.getNewCommentaire(),
      "id_user": this.mission.id_user,
      "date": new Date(this.mission.date).toLocaleString('fr-FR', { year:"numeric"}) + "-" + new Date(this.mission.date).toLocaleString('fr-FR', { month:'2-digit'}) + "-" + new Date(this.mission.date).toLocaleString('fr-FR', { day:'2-digit'}) + " " + new Date(this.mission.date).toLocaleString('fr-FR', { hour:'2-digit' , minute:'2-digit', second:'2-digit'}),
      "valider": "0",
      "id_animal": this.getIdAnimal(),
      "id_enclos": this.getIdEnclos(),
    }

    console.log(nouvelleMissionModif);

    this.http.put("http://127.0.0.1:3000/mission/"+ this.mission.id , (nouvelleMissionModif))
      .subscribe(data => {
        console.log(data);
        this.showToast("La mission a bien été modifiée ..");
        this.close();
       }, error => {
        console.log(error);
        this.showToast("Erreur lors de la modification !");
      });
  }

}
