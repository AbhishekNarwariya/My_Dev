import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  deleteUser(id: string | number) {
    return this.http.delete<any>(`http://localhost:3000/users/${id}`);
  }

  updateUser(user: any) {
    return this.http.put<any>(`http://localhost:3000/users/${user.id}`, user);
  }

  searchUsers(term: string) {
    if (!term || term.trim() === '') {
      return this.getData();
    }
    // Filter by all fields using json-server's q param
    return this.http.get<any[]>(`http://localhost:3000/users?q=${encodeURIComponent(term)}`);
  }
}
