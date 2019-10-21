import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { church } from '../_model/church';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChurchdataService {
 
  uri = '';
  constructor(private http: HttpClient) {
    this.uri = this.getBaseUrl();
  }
  getBaseUrl() {
    return 'https://localhost:50102/api/church/';
  } 
  AddChurch(churchdata: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/problem+json'
    });
    let options = { headers: headers };
    this.http.post(this.uri + 'addchurch', JSON.stringify(churchdata), options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          console.log("Error occured");
        }
      );  
  }
  getAllchurches() : Observable<church> {
    return this.http.get<church>(this.uri + 'getallchurches')
      .pipe(retry(1),
        catchError(this.errorHandl)
      )
  }
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
