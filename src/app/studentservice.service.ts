import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  private apiUrl =  'http://localhost:3000/users'; 

  constructor(private http:HttpClient) { }

  getStudents():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)

  }

  addStudent(student:any): Observable<any[]>{
    student.id = uuidv4();
   return this.http.post<any[]>(this.apiUrl, student)
  }

   deleteStudent(id:number):Observable<any>{
      return this.http.delete(`${this.apiUrl}/${id}`)

    }
  
}
