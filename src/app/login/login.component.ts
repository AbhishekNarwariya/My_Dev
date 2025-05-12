import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm:FormGroup

  constructor(private fb:FormBuilder,private router: Router, private authService: AuthService,){
    this.userForm = this.fb.group({
      username:[''],
      password:['']
    })

  }

  userLogin(){
    console.log(this.userForm.value);

    const { username, password } = this.userForm.value;

    if(this.authService.login(username, password)){
      alert('login successfully')
      this.router.navigate(['/dashboard'])
    }

    else{
      alert('Invalid credential')
    }
  }

}
