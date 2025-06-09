import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { user } from './popup/popup.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular_code_daily';
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'username', 'role'];
  formUser: FormGroup;
  userForm: FormGroup;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  isEditing = false;
  editingUser: any = null;
  searchTerm: string = '';
  searchTimeout: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataservice: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataservice.getData().subscribe((res: any) => {
      this.users = Array.isArray(res) ? res : res.users;
      this.dataSource.data = this.users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addUser(user: any) {
    this.users = [...this.users, user];
    this.dataSource.data = this.users;
  }

  openAddUserPopup() {
    const dialogRef = this.dialog.open(UserComponent, {
      width: '400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = [...this.users, result];
        this.dataSource.data = this.users;
      }
    });
  }

  deleteUser(user: any) {
    this.dataservice.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
      this.dataSource.data = this.users;
    });
  }

  editUser(user: any) {
    this.editingUser = { ...user };
    this.isEditing = true;
    this.openEditUserPopup(user);
  }

  openEditUserPopup(user: any) {
    const dialogRef = this.dialog.open(UserComponent, {
      width: '400px',
      data: { user }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = this.users.map(u => u.id === result.id ? result : u);
        this.dataSource.data = this.users;
      }
      this.isEditing = false;
      this.editingUser = null;
    });
  }

  onSearchChange(term: string) {
    // clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      const payload = { search: term };
      this.dataservice.getData().subscribe((res: any) => {
        const users = Array.isArray(res) ? res : (res.users || []);
        if (!payload.search || payload.search.trim() === '') {
          this.users = users;
        } else {
          const lower = payload.search.toLowerCase();
          this.users = users.filter(u =>
            (u.name && u.name.toLowerCase().includes(lower)) ||
            (u.email && u.email.toLowerCase().includes(lower)) ||
            (u.username && u.username.toLowerCase().includes(lower)) ||
            (u.role && u.role.toLowerCase().includes(lower))
          );
        }
        this.dataSource.data = this.users;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      });
    }, 300);
  }
}
