import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMachineCode } from '../models/machinecode';

@Injectable({
  providedIn: 'root'
})
export class MachineCodeService {

  private _url: string = "http://localhost:3001/machinecodeapis";

  constructor(private httpClient: HttpClient) { }

  public getMachineCodeList(): Observable<IMachineCode[]>{
    return this.httpClient.get<IMachineCode[]>(this._url.concat("/list"))
    .pipe(catchError(this.errorHandler));
  }
  public getMachineCodebyId(id: string): Observable<IMachineCode>{
    return this.httpClient.get<IMachineCode>(this._url.concat("/"+id))
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
