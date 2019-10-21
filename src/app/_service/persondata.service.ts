import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import { person } from "../_model/person";
import { Observable, throwError } from 'rxjs';  
import { retry, catchError } from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';
import { Options } from 'selenium-webdriver/chrome';



@Injectable({
  providedIn: 'root'
})
export class PersondataService {
  uri = '';
  constructor(private http: HttpClient) {
    this.uri = this.getBaseUrl();
  }
  getBaseUrl() {
    return 'https://localhost:50102/api/person/';
  }  
  getchurchmembers() :  Observable<person> {
    return this.http.get<person>(this.uri+'getchurchmembers')
      .pipe(retry(1),
        catchError(this.errorHandl)
      )
  } 
  addperson(personobj: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/problem+json'
    });
    let options = { headers: headers };
    this.http.post(this.uri + 'addperson', JSON.stringify(personobj), options)
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
  public updatelocation(personobj: any) {    
    let headers = new HttpHeaders({
      'Content-Type': 'application/problem+json'
    });
    let options = { headers: headers };
    this.http.put(this.uri + 'updatelocation', JSON.stringify(personobj),options)
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
