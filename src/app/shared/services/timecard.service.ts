import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITimeSheet } from '../models/timesheet';
import { APIserver, Apis } from '../properties';
import { Authentication } from '../models/authentication';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {

  private auth0: Authentication;
  private headers: HttpHeaders;
  private _baseUrl: string;
  private _api: string;
  private _url: string;
  private _apiMethod: string;

  constructor(private httpClient: HttpClient, private _userService: UserService) { }

  public getTimeCardList(): Observable<ITimeSheet[]>{
    this._apiMethod = Apis.getAll;
    this.headers = this.headers.set('authorization', 'Bearer ' + this.auth0.token);
    return this.httpClient.get<ITimeSheet[]>(this._url.concat(this._apiMethod), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public getTimeCardbyId(id: string): Observable<ITimeSheet>{
    this._apiMethod = Apis.getbyId;
    this.headers = this.headers.set('authorization', 'Bearer ' + this.auth0.token);
    return this.httpClient.get<ITimeSheet>(this._url.concat(this._apiMethod), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}