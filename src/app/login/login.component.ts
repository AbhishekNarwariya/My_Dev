import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email === 'admin@gmail.com' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Login successful');
        this.router.navigate(['/studentdetails']); // ✅ Navigate here
      } else {
        alert('Invalid email or password');
      }
    } else {
      this.loginForm.markAllAsTouched(); // show validation errors
    }
  }

}
