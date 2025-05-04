import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new_code'; 

  users: any[] = [];

  constructor(private myservice:MyService){

  }

  ngOnInit(){
    this.recieveData()
  }

  recieveData(){
    this.myservice.getUsers().pipe(map(users=>users.map(user=>user.name))).subscribe(data=>{
      return this.users = data
    })
  }
}
