import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { User } from './models/user.modal';
import { Post } from './models/post.modal';
import { DataService } from './services/data.service';
import { BehaviorSubject, catchError, combineLatest, concat, debounceTime, distinctUntilChanged, forkJoin, map, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'new_code'; 
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  trackById(user: any){
    return user.id;
  }

}
