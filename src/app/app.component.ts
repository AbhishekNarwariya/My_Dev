import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'my-angular-app';

  users:User[]=[]
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'city', 'phone', 'company'];


  constructor(private userservice:UserService, private dialog: MatDialog){

  }

  ngOnInit() {
    this.fetchUsers();
   
  }

  fetchUsers() {
    this.userservice.getUser().subscribe({
      next: (response) => {
        console.log('API Response:', response); // Dekhne ke liye
        this.users = response;

        console.log(this.users);
        
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  openAddUserDialog(){
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '400px'
    });

  }

}
