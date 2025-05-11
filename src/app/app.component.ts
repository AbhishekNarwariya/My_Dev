import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // 👈 Import this


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new_code';
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  Submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
    else {
      // this.loginForm.markAllAsTouched(); // To show errors
    }


  }


}
