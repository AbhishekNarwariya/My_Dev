import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'my-angular-app';

  isLoggedIn = false;
  

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

 
}
