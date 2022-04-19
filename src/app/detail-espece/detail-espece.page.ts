import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-espece',
  templateUrl: './detail-espece.page.html',
  styleUrls: ['./detail-espece.page.scss'],
})
export class DetailEspecePage implements OnInit {

  espece: any ={};
  infos: any ={};
  pays: any ={};

  constructor(public http: HttpClient,
    private modalCtrl: ModalController,
    private navParams: NavParams) { this.espece = this.navParams.data; }

  ngOnInit() {
    this.getCaractEspece(this.espece.id);
    this.getPaysEspece(this.espece.id_pays);
  }

  getCaractEspece(id){
    this.http.get("http://localhost:3000/infoespece/" + id).subscribe((res: any) =>{
      console.log(res);
      this.infos = res.infos;
    });
  }

  getPaysEspece(id){
    this.http.get("http://localhost:3000/pays/" + id).subscribe((res: any) =>{
      console.log(res);
      this.pays = res.pays;
    });
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
