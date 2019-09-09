import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IJobCode, JobCode } from '../models/job';
import { APIserver, Apis } from '../properties';
import { Authentication } from '../models/authentication';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class JobCodeService {

    private auth0: Authentication;
    private headers: HttpHeaders;
    private _baseUrl: string;
    private _api: string;
    private _url: string;
    private _apiMethod: string;


    constructor(private httpClient: HttpClient, private _authenticationService: AuthenticationService) { 
      this._baseUrl = APIserver.getUrl();
      this._api = Apis.jobcodeapis;
      this._url = this._baseUrl.concat(this._api);
      this.auth0 = new Authentication(_authenticationService.getToken());
      this.headers = new HttpHeaders();
    }
  
    public getJobCodeList(): Observable<IJobCode[]>{
      this._apiMethod = Apis.getAll;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.get<IJobCode[]>(this._url.concat(this._apiMethod), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public getJobCodeById(_id: string): Observable<IJobCode>{
      this._apiMethod = Apis.getbyId;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);      
      return this.httpClient.get<IJobCode>(this._url.concat(this._apiMethod).concat(_id), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public createJobCode(jobCode: JobCode): Observable<Object>{
      this._apiMethod = Apis.create;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.post<Object>(this._url.concat(this._apiMethod), jobCode, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public updateJobCode(jobCode: JobCode): Observable<JobCode>{
      this._apiMethod = Apis.update;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.put<JobCode>(this._url.concat(this._apiMethod).concat(jobCode._id), jobCode, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public removeJobCode(jobCode: JobCode): Observable<JobCode>{
      this._apiMethod = Apis.removeById;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.delete<JobCode>(this._url.concat(this._apiMethod).concat(jobCode._id), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }    
}