import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';

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
  posts: any[] = [];
  errorMessage: string = '';
  loading: boolean = false;
  
  constructor(private postService: MyService) {}

  ngOnInit(): void {
  this.fetchPosts(); // Important
}

  fetchPosts() {
    this.loading = true
    this.postService.getPosts().subscribe({
      next:(data)=>{
        this.posts =data
        this.loading=false
      },
      error:(err)=>{
        this.errorMessage = err.message;
        this.loading = false
      }
    })
  }
 
 
}
