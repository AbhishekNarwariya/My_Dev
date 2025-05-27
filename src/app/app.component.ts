import { Component } from '@angular/core';
import { DataService, User } from './data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  dataSource = new MatTableDataSource<User>();

  constructor(private dataservice: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUser()
   
  }
  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  onAddUser() {
    const dialogRef = this.dialog.open(AdduserComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User added:', result);
        this.getUser()
      }
    });

  }
  onEditUser(user: any): void {
    console.log('Edit user', user);
  }

  getUser(){
     this.dataservice.getUsers().subscribe(data => {
      this.dataSource.data = data;

    })
  }

  onDeleteUser(user: any): void {
    // this.dataservice.deleteUser(user.id).subscribe({
    //   next: () => {
    //     console.log(`User with ID ${user.id} deleted`);
    //     this.dataSource.data = this.dataSource.data.filter((u: any) => u.id !== user.id);
    //   },
    //   error: (err) => console.error('Delete failed', err)
    // });
    this.dataservice.deleteUser(user.id).subscribe((a)=>{
      console.log(a);
      
      // this.dataSource.data = this.dataSource.data.filter((u)=>u.id !== user.id)
      this.dataservice.getUsers().subscribe(data => {
      this.dataSource.data = data;

    })
    })
  }

}
