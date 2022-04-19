import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affichage-espece',
  templateUrl: './affichage-espece.page.html',
  styleUrls: ['./affichage-espece.page.scss'],
})
export class AffichageEspecePage {

  especes;
  
  constructor(private http: HttpClient, private router:Router, private route: ActivatedRoute) {
    this.readAPI('http://localhost:3000/especes')
      .subscribe((data) => {
      console.log(data['espece']);
      this.especes = data['espece'];
    });
  }
  redirectetat(id){
    this.router.navigateByUrl(`afficher-animaux?id=${id}`);
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

}
