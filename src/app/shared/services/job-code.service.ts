import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IJobCode } from '../models/job';
import { APIserver, Apis } from '../properties';

@Injectable({
    providedIn: 'root'
})
export class JobCodeService {

    private token: string;
    private headers: HttpHeaders;
    private _baseUrl: string;
    private _api: string;
    private _url: string;
    private _apiMethod: string;


    constructor(private httpClient: HttpClient) { 
      this._baseUrl = APIserver.getUrl();
      this._api = Apis.jobcodeapis;
      this._url = this._baseUrl.concat(this._api);
      this.token = localStorage.getItem("auth0.token");
      this.headers = new HttpHeaders();
    }
  
    public getJobCodeList(): Observable<IJobCode[]>{
      this._apiMethod = Apis.getAll;
      this.headers = this.headers.set('authorization', 'Bearer '+this.token);
      return this.httpClient.get<IJobCode[]>(this._url.concat(this._apiMethod), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public getJobCodeById(id: string): Observable<IJobCode>{
      this._apiMethod = Apis.getbyId;
      this.headers = this.headers.set('authorization', 'Bearer '+this.token);
      return this.httpClient.get<IJobCode>(this._url.concat(this._apiMethod), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
  
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }    
}