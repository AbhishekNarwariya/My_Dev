import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentpopupComponent } from '../studentpopup/studentpopup.component';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  displayedColumns: string[] = [ 'name', 'email', 'role','actions'];
  students: any[]=[]
  searchControl = new FormControl();
  // filteredStudents: any[]=[];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private studentservice:StudentserviceService, private dialog:MatDialog){}

  ngOnInit(){
    this.getStudentDetails()
    this.setupSearchFilter();
    
  }

  getStudentDetails(){
    this.studentservice.getStudents().subscribe(data=>{
      this.students = data;
      this.dataSource.data = data;

      console.log(this.dataSource.data);
      
    })
  }

  setupSearchFilter(){
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(value=>{
      const filterValue = value.trim().toLowerCase();
      this.dataSource.data = this.students.filter(student =>
        student.name.toLowerCase().includes(filterValue) ||
        student.email.toLowerCase().includes(filterValue) ||
        student.role.toLowerCase().includes(filterValue)

      );
      console.log('b',this.dataSource.data);
      
    })
  }

  addStudent(){
    const dialogRef = this.dialog.open(StudentpopupComponent,{
      width:'400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.studentservice.addStudent(result).subscribe(newStudent=>{
        this.students = [...this.students, newStudent];
        this.dataSource.data = [...this.students];
        console.log(this.students);
        })
        // const newStudent = {  ...result };
        //  this.students.push(newStudent);
        
      }
        
      
    });
  }

  editStudent(e:any){

  }

  deleteStudent(id:number){
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentservice.deleteStudent(id).subscribe(()=>{
        this.students = this.students.filter(student=>student.id !==id);

        this.dataSource.data=[...this.students]
      })
    }
  }

  
}
