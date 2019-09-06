import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public authorize(token: string): void{
    localStorage.setItem('token', token);
  }

  public deauthorize(): void{
    localStorage.removeItem('token');
  }

  public getAuthenticatedUser(): User{
    let token = localStorage.getItem('token');
    let payload = atob(token.split('\.')[1]);
    let authenticatedUser: User = JSON.parse(payload);
    return authenticatedUser;
  }

  public getToken(): string{
    return localStorage.getItem('token');
  }

  public isAuthenticated(){
    return localStorage.getItem('token')!=undefined || localStorage.getItem('token')!=null;
  }

}
