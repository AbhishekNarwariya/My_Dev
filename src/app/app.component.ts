import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { User } from './models/user.modal';
import { Post } from './models/post.modal';
import { DataService } from './services/data.service';
import { forkJoin } from 'rxjs';

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
    this.fetchData();
  }

  fetchData(){
    this.loading = true;
    this.error = '';


    forkJoin({
      users:this.dataService.getUsers(),
      posts:this.dataService.getPosts()
    }).subscribe({
      next:(res)=>{
        this.users = res.users;
        this.posts = res.posts
        this.loading = false
      },

      error:(err)=>{
        this.error = 'failed to load'
        console.error(err)
        this.loading =false
      }
    })


  }

}
