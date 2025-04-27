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
  
  searchQuery: string = '';
  results$: Observable<any[]> = new Observable();
  errorMessage: string = '';

  // Subject to emit search query changes
  private searchSubject: Subject<string> = new Subject();

  constructor(private searchService: DataService) {}

  ngOnInit(): void {
    // Listen to searchSubject and perform search with switchMap
    this.results$ = this.searchSubject.pipe(
      debounceTime(300), // Wait for user to stop typing
      distinctUntilChanged(), // Only emit if query changes
      switchMap((query) => {
        if (!query.trim()) {
          return []; // Return empty array if query is empty
        }
        return this.searchService.searchPosts(query).pipe(
          catchError((error) => {
            this.errorMessage = 'An error occurred while searching';
            return [];
          })
        );
      })
    );
  }

  onSearch(query: string): void {
    // Emit search query to the searchSubject
    this.searchSubject.next(query);
  }

}
