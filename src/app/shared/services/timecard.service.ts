import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITimeCard } from '../models/timecard';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {

  private _url: string = "http://localhost:3001/timecardapis";

  constructor(private httpClient: HttpClient) { }

  public getTimeCardList(): Observable<ITimeCard[]>{
    return this.httpClient.get<ITimeCard[]>(this._url.concat("/list"))
    .pipe(catchError(this.errorHandler));
  }
  public getTimeCardbyId(id: string): Observable<ITimeCard>{
    return this.httpClient.get<ITimeCard>(this._url.concat("/"+id))
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}