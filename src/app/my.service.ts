import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';

  
}
