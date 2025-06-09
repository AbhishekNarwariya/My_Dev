import { Component, ViewChild, AfterViewInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements AfterViewInit {
  userForm: FormGroup;
  users: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    @Optional() private dialogRef: MatDialogRef<UserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });
    if (data && data.user) {
      this.userForm.patchValue(data.user);
    }
    this.loadUsers();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  loadUsers() {
    this.dataService.getData().subscribe((res: any) => {
      this.users = Array.isArray(res) ? res : res.users;
      this.dataSource = new (window as any).MatTableDataSource(this.users);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser = { ...this.userForm.value };
      if (this.data && this.data.user) {
        // Edit mode
        newUser.id = this.data.user.id;
        this.dataService.updateUser(newUser).subscribe((user: any) => {
          this.dialogRef?.close(user);
          this.userForm.reset();
          this.loadUsers();
        });
      } else {
        // Add mode
        this.dataService.addUser(newUser).subscribe((user: any) => {
          this.dialogRef?.close(user);
          this.userForm.reset();
          this.loadUsers();
        });
      }
    }
  }
}
