import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, map, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyService } from './my.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new_code'; 
  searchControl = new FormControl();
  results: any[] = [];

  constructor(private myservice: MyService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(query => {
          if (!query || query.trim() === '') {
            return of([]); // return empty array for blank input
          }
          return this.myservice.searchUsers().pipe(
            map(users =>
              users.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
              )
            )
          );
        })
      )
      .subscribe(filtered => {
        this.results = filtered;
      });
  }
}
