import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-studentpopup',
  standalone: false,
  templateUrl: './studentpopup.component.html',
  styleUrl: './studentpopup.component.css'
})
export class StudentpopupComponent {
  
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<StudentpopupComponent>){
    this.studentForm = this.fb.group({
      
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  submit(){
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value);
      console.log(this.studentForm.value);
      
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }



}
