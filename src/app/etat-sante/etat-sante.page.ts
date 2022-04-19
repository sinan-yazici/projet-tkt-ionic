import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-etat-sante',
  templateUrl: './etat-sante.page.html',
  styleUrls: ['./etat-sante.page.scss'],
})
export class EtatSantePage implements OnInit{

  sante: any = [];
  form: any = {
    note: null,
    date: null,
    observation: null
  };
  id;

  constructor(private http: HttpClient,  private toastCtrl: ToastController, private router:Router, private route: ActivatedRoute) {
    
  }


  ngOnInit() {
    let idanimal;
    // this.http.get("http://localhost:3000/animaux").subscribe((res: any) => {
    //   this.animalID = res.animal;
    //   console.log(res.animal)
    // })
    this.route.queryParams.subscribe(params => {
      idanimal = params['id'];
    })
    this.id = idanimal;
  }
  
  AddSante(){
    const {
      note,
      date,
      observation,
    } = this.form
    this.http.post("http://localhost:3000/sante", {note: note, date: date, observation: observation, id_animal: this.id}).subscribe( (res: any) => {
    console.log(res);
    if(res.message == "sante créée")
    {
      this.toastCtrl.create({ duration: 3000, message: "Etat de santé à été ajouté" }).then(t => t.present());
    }
    else{
      this.toastCtrl.create({ duration: 3000, message: "Erreur lors d'ajout" }).then(t => t.present());
    }
    })
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }
}
