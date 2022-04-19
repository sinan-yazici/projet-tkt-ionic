import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    public http: HttpClient,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  user: any={};

  ngOnInit() {
  }

  async showToast(message){
    await this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(res => res.present());
  }

  Connexion(){

    if(localStorage.getItem('loggedUser')){
      this.router.navigate(['/home']);
    }

    if(!this.user.login || !this.user.password){
      this.showToast('Merci de bien remplir les champs !');
    }
    else{
      this.http.post("http://localhost:3000/login", (this.user)).subscribe((res: any) => {
        console.log(res.message);
        console.log(res.user_droit);

        localStorage.setItem('loggedUser', res.user_droit);
        // localStorage.setItem('idUtilisateur', res.id);

        
        this.router.navigate(['/home']);
      },
        error => {
          this.showToast('Le nom d\'utilisateur ou le mot de passe est incorect !');
        })
    }   
  }
}
