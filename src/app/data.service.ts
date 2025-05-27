import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  addUser(userdata):Observable<any>{
    return this.http.post(this.apiUrl, userdata)

  }
}
