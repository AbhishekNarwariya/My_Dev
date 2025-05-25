import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NumService {

 private userApi = 'https://jsonplaceholder.typicode.com/users';
  private postsApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.userApi}/${id}`);
  }

  getPostsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.postsApi}?userId=${userId}`);
  }
}
