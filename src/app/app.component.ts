import { Component} from '@angular/core';
import { NumService } from './num.service';
// import { Observable } from 'rxjs';
import { Observable, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css'],
  providers:[NumService]
})
export class AppComponent  {
  title = 'my-angular-app';
user: any;
  posts: any[] = [];

  constructor(private numservice: NumService) { }

  ngOnInit(): void {
    // Directly start with first API call (no 'of' here)
    this.numservice.getUserById(1).pipe(
      mergeMap(User => {
        this.user = User; // save user data
        // return second API observable
        return this.numservice.getPostsByUserId(User.id);
      })
    ).subscribe(
      posts => {
        this.posts = posts;
        console.log('User:', this.user);
        console.log('Posts:', this.posts);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
