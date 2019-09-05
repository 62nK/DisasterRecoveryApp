import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IJobCode, JobCode } from '../models/job';
import { APIserver, Apis } from '../properties';
import { Authentication } from '../models/authentication';
import { UserService } from './user.service';

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


    constructor(private httpClient: HttpClient, private _userService: UserService) { 
      this._baseUrl = APIserver.getUrl();
      this._api = Apis.jobcodeapis;
      this._url = this._baseUrl.concat(this._api);
      this.auth0 = _userService.getAuthenticatedUser();
      this.headers = new HttpHeaders();
    }
  
    public getJobCodeList(): Observable<IJobCode[]>{
      this._apiMethod = Apis.getAll;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.get<IJobCode[]>(this._url.concat(this._apiMethod), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public getJobCodeById(id: string): Observable<IJobCode>{
      this._apiMethod = Apis.getbyId;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.get<IJobCode>(this._url.concat(this._apiMethod), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public createJobCode(jobCode: JobCode): Observable<Object>{
      this._apiMethod = Apis.create;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.post<Object>(this._url.concat(this._apiMethod), jobCode, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    public removeJobCode(jobCode: JobCode): Observable<Object>{
      this._apiMethod = Apis.removeById;
      this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
      return this.httpClient.delete<Object>(this._url.concat(this._apiMethod).concat(jobCode._id), {headers: this.headers})
      .pipe(catchError(this.errorHandler));
    }
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }    
}