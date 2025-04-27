import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { User } from './models/user.modal';
import { Post } from './models/post.modal';
import { DataService } from './services/data.service';
import { BehaviorSubject, combineLatest, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'new_code'; 
  users: User[] = [];
  posts: Post[] = [];

  filteredPosts: Post[] = [];

  selectedUserId$ = new BehaviorSubject<number | null>(null);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Load users and posts first
    combineLatest([
      this.dataService.getUsers(),
      this.dataService.getPosts()
    ]).subscribe(([users, posts]) => {
      this.users = users;
      this.posts = posts;
    });

    // Update filtered posts whenever user selection changes
    combineLatest([
      this.selectedUserId$,
      this.dataService.getPosts()
    ]).pipe(
      map(([userId, posts]) => {
        if (userId === null) {
          return posts;
        }
        return posts.filter(post => post.userId === userId);
      })
    ).subscribe(filtered => {
      this.filteredPosts = filtered;
    });
  }

  onUserChange(event: Event): void {
    // Type casting the event target to HTMLSelectElement
    const selectElement = event.target as HTMLSelectElement;
    const userId = selectElement.value ? parseInt(selectElement.value, 10) : null;
    
    // Now we can use the selected userId
    this.selectedUserId$.next(userId);
  }
  


}
