import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser:string;
  public isLoggedIn:boolean = false;
  public roles:string[];

  constructor() { }
}
