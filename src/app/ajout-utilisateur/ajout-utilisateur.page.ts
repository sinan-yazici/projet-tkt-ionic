import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { convertToParamMap } from '@angular/router';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.page.html',
  styleUrls: ['./ajout-utilisateur.page.scss'],
})
export class AjoutUtilisateurPage {

  user: any = {};
  constructor(private http: HttpClient, private toastCtrl: ToastController) { }
  
  submit(){
    this.http.post("http://localhost:3000/register", this.user).subscribe( (res: any) => {
    console.log(res);
    const convert = JSON.stringify(res);
    if(res.message == "user créé")
    {
      this.toastCtrl.create({ duration: 3000, message: "Utilisateur créé" }).then(t => t.present());
    }
    else{
      this.toastCtrl.create({ duration: 3000, message: "Erreur lors de la création" }).then(t => t.present());
    }
    })
   }
}
