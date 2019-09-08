import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITimeSheet, TimeSheet } from '../models/timesheet';
import { APIserver, Apis } from '../properties';
import { Authentication } from '../models/authentication';
import { AuthenticationService } from './authentication.service';

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

  constructor(private httpClient: HttpClient, private _authenticationService: AuthenticationService) { 
    this._baseUrl = APIserver.getUrl();
    this._api = Apis.timecardapis;
    this._url = this._baseUrl.concat(this._api);
    this.auth0 = new Authentication(_authenticationService.getToken());
    this.headers = new HttpHeaders();
  }

  public getTimeCardList(): Observable<ITimeSheet[]>{
    this._apiMethod = Apis.getAll;
    this.headers = this.headers.set('authorization', 'Bearer ' + this.auth0.token);
    return this.httpClient.get<ITimeSheet[]>(this._url.concat(this._apiMethod), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public getTimeCardbyId(_id: string): Observable<ITimeSheet>{
    this._apiMethod = Apis.getbyId;
    this.headers = this.headers.set('authorization', 'Bearer ' + this.auth0.token);
    return this.httpClient.get<ITimeSheet>(this._url.concat(this._apiMethod).concat(_id), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public createTimeCard(timeSheet: TimeSheet): Observable<Object>{
    this._apiMethod = Apis.create;
    this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
    return this.httpClient.post<Object>(this._url.concat(this._apiMethod), timeSheet, {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }

  public updateTimeCard(timeCard: TimeSheet): Observable<TimeSheet>{
    this._apiMethod = Apis.update;
    this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
    return this.httpClient.put<TimeSheet>(this._url.concat(this._apiMethod).concat(timeCard._id), timeCard, {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }

  public removeTimeCard(timeCard: TimeSheet): Observable<TimeSheet>{
    this._apiMethod = Apis.removeById;
    this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
    return this.httpClient.delete<TimeSheet>(this._url.concat(this._apiMethod).concat(timeCard._id), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}