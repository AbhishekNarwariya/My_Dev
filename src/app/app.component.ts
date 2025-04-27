import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { User } from './models/user.modal';
import { Post } from './models/post.modal';
import { DataService } from './services/data.service';
import { BehaviorSubject, combineLatest, concat, forkJoin, map } from 'rxjs';

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
  loading: boolean = false;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadDataSequentially();
  }

  // Using concat to load users and then posts sequentially
  loadDataSequentially(): void {
    this.loading = true;
    this.error = '';

    const users$ = this.dataService.getUsers();
    const posts$ = this.dataService.getPosts();

    concat(users$, posts$).subscribe({
      next: (data) => {
        // Check if data is User[]
        if ((data as User[])[0]?.name) {
          this.users = data as User[];  // First result is users
        }
        // Check if data is Post[]
        else if ((data as Post[])[0]?.title) {
          this.posts = data as Post[];  // Second result is posts
        }
      },
      error: (err) => {
        this.error = 'Failed to load data';
        console.error(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
