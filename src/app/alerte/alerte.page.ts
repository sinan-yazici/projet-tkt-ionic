import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AjouterAlertePage } from '../ajouter-alerte/ajouter-alerte.page';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModifierAlertePage } from '../modifier-alerte/modifier-alerte.page';


@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.page.html',
  styleUrls: ['./alerte.page.scss'],
})
export class AlertePage {

  alertes =[];

  constructor(private http: HttpClient, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertController: AlertController) {

    
  }
  AfficherAlerte(){
    this.alertes =[];
    this.readAPI('http://localhost:3000/alertes')
      .subscribe((data) => {
      for(let i = 0; i< data['alerte'].length ; i++ )
      {
        this.alertes.push(data['alerte'][i]);
      }
      
    });
  }


  ngOnInit(){
this.AfficherAlerte();
  }
  
  readAPI(URL: string) {
    return this.http.get(URL);
  }


  async supprimerAlerte(id, libelle) {
    
    await this.alertController.create({
      header: "Supprimer l'alerte",
      subHeader: libelle,
      message: "Voulez-vous vraiment supprimer l'alerte ?",
      buttons: [
        { text: "Oui", handler:() =>{
           
            this.http.delete(`http://localhost:3000/alerte/${id}`,).subscribe((res: any) => {
              this.AfficherAlerte();
            this.toastCtrl.create({ duration: 3000, message: "L'alerte à bien été supprimée." }).then(t => t.present());
    });
          }
        },
        {
          text: "Non"
        }

      ]
    }).then(res=> res.present());
  }

  ModifierAlerte(alerte){
    this.modalCtrl.create({
      component: ModifierAlertePage,
      componentProps: alerte
      }).then( modalres =>{
      modalres.present();
  
      modalres.onDidDismiss().then( res=>{
        if(res.data != null){
          this.AfficherAlerte();
  }
})
})
}




  ajouterAlerte(){
    this.modalCtrl.create({
    component: AjouterAlertePage
    }).then( modalres =>{
    modalres.present();

    modalres.onDidDismiss().then( res=>{
      if(res.data != null){
this.AfficherAlerte();
      }
    })
    })
  }

}
