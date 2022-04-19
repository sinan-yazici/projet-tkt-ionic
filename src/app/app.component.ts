import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router) {}

  droit = localStorage.getItem('loggedUser');

  disconnect(){
    localStorage.clear();
    this.droit = null;
    this.router.navigate(['']);
  }

}
