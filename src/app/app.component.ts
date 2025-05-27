import { Component} from '@angular/core';
import { DataService, User } from './data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'my-angular-app';

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];

  dataSource = new MatTableDataSource<User>();

  constructor(private dataservice: DataService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.dataservice.getUsers().subscribe(data=>{
      this.dataSource.data = data;

    })
  }
 applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  onAddUser(){
    const dialogRef = this.dialog.open(AdduserComponent, {
      width:'400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('User added:', result);
      // Here you can call an API or push it to the table manually
      // this.dataSource.data = [...this.dataSource.data, result];
    }
  });

  }
    onEditUser(user: any): void {
  // Logic to open an edit form or dialog
  console.log('Edit user', user);
}

onDeleteUser(user: any): void {
  // Logic to delete the user (confirmation + API call)
  console.log('Delete user', user);
}

}
