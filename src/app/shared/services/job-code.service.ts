import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IJobCode } from '../models/job';

@Injectable({
    providedIn: 'root'
})
export class JobCodeService {
    private _url: string = "http://localhost:3001/jobcodeapis";

    constructor(private httpClient: HttpClient) { }
  
    public getJobCodeList(): Observable<IJobCode[]>{
      return this.httpClient.get<IJobCode[]>(this._url.concat("/list"))
      .pipe(catchError(this.errorHandler));
    }
    public getJobCodeById(id: string): Observable<IJobCode>{
      return this.httpClient.get<IJobCode>(this._url.concat("/"+id))
      .pipe(catchError(this.errorHandler));
    }
  
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }    
}