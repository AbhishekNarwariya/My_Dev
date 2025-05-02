import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new_code'; 

  Submit(data:any){
    console.log(data.value)

  }



}
