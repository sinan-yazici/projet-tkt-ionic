import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-afficher-animaux',
  templateUrl: './afficher-animaux.page.html',
  styleUrls: ['./afficher-animaux.page.scss'],
})
export class AfficherAnimauxPage implements OnInit{

  animals;
  id;
  constructor(private http: HttpClient, private router:Router, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
      let idespece;
  
      this.route.queryParams.subscribe(params => {
        idespece = params['id'];
      })
      this.id = idespece;
      
      this.readAPI(`http://localhost:3000/espece/animal/${this.id}`)
      .subscribe((data) => {
      console.log(data['animal']);
      this.animals = data['animal'];
    });
  }
  redirectetat(id){
    this.router.navigateByUrl(`etat-sante?id=${id}`);
  }
  readAPI(URL: string) {
    return this.http.get(URL);
  }
}
