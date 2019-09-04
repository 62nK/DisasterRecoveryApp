import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITimeSheet } from '../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {

  private _url: string = "http://localhost:3001/timecardapis";

  constructor(private httpClient: HttpClient) { }

  public getTimeCardList(): Observable<ITimeSheet[]>{
    return this.httpClient.get<ITimeSheet[]>(this._url.concat("/list"))
    .pipe(catchError(this.errorHandler));
  }
  public getTimeCardbyId(id: string): Observable<ITimeSheet>{
    return this.httpClient.get<ITimeSheet>(this._url.concat("/"+id))
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}