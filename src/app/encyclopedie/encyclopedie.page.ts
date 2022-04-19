import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { DetailEspecePage } from '../detail-espece/detail-espece.page';

@Component({
  selector: 'app-encyclopedie',
  templateUrl: './encyclopedie.page.html',
  styleUrls: ['./encyclopedie.page.scss'],
})
export class EncyclopediePage implements OnInit {

  especes = [];

  constructor(public http: HttpClient,
    private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getEspeces();
  }


  getEspeces(){
    this.http.get("http://localhost:3000/especes").subscribe((res: any) =>{
      console.log(res);
      this.especes = res.espece;
    });
  }

  details(espece){
    this.modalCtrl.create({
      component: DetailEspecePage,
      componentProps: espece
    }).then( modalres =>{
      modalres.present();
    })
  }
}
