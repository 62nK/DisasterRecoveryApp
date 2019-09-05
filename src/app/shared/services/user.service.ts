import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { APIserver, Apis } from '../properties';
import { Observable, throwError } from 'rxjs';
import { Authentication } from '../models/authentication';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string;
  private _api: string;
  private _url: string;
  private _apiMethod: string;

  constructor(private _httpClient: HttpClient) { 
    this._baseUrl = APIserver.getUrl();
    this._api = Apis.userapis;
    this._url = this._baseUrl.concat(this._api);
  }

  public signIn(user: User): Observable<Authentication>{
    this._apiMethod = Apis.signin;
    return this._httpClient.post<Authentication>(this._url+this._apiMethod, user);
  }

  public signOut(): void{
    localStorage.clear();
  }

  public getAuthenticatedUser(): Authentication{
    return new Authentication(localStorage.getItem("token"));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}