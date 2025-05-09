import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.API_URL).pipe(
      delay(3000),
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    // if (error.error instanceof ErrorEvent) {
    //   console.error('Client-side error:', error.error.message);
    // }else{
    //   console.error(`Server returned code ${error.status}, body was: ${error.error}`);

    // }
    return throwError(() => new Error('Something went wrong. Please try again later.'));

  };
  
}
