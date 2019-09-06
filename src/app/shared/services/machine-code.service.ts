import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMachineCode, MachineCode } from '../models/machinecode';
import { APIserver, Apis } from '../properties';
import { Authentication } from '../models/authentication';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MachineCodeService {

  private auth0: Authentication;
  private headers: HttpHeaders;
  private _baseUrl: string;
  private _api: string;
  private _url: string;
  private _apiMethod: string;

  constructor(private httpClient: HttpClient, private _authenticationService: AuthenticationService) { 
    this._baseUrl = APIserver.getUrl();
    this._api = Apis.machinecodeapis;
    this._url = this._baseUrl.concat(this._api);
    this.auth0 = new Authentication(_authenticationService.getToken());
    this.headers = new HttpHeaders();
  }

  public getMachineCodeList(): Observable<IMachineCode[]>{
    this._apiMethod = Apis.getAll;
    this.headers = this.headers.set('authorization', 'Bearer ' + this.auth0.token);
    return this.httpClient.get<IMachineCode[]>(this._url.concat(this._apiMethod),  {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public getMachineCodebyId(id: string): Observable<IMachineCode>{
    this._apiMethod = Apis.getbyId;
    this.headers = this.headers.set('authorization', 'Bearer' + this.auth0.token);
    return this.httpClient.get<IMachineCode>(this._url.concat(this._apiMethod), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public createMachineCode(machineCode: MachineCode): Observable<Object>{
    this._apiMethod = Apis.create;
    this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
    return this.httpClient.post<Object>(this._url.concat(this._apiMethod), machineCode, {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }
  public removeMachineCode(machineCode: MachineCode): Observable<Object>{
    this._apiMethod = Apis.removeById;
    this.headers = this.headers.set('authorization', 'Bearer '+this.auth0.token);
    return this.httpClient.delete<Object>(this._url.concat(this._apiMethod).concat(machineCode._id), {headers: this.headers})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
