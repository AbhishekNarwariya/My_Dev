import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.modal';
import { Post } from '../models/post.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // Get Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  // Get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
}
