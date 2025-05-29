import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular_code_daily';

  userform:FormGroup
  submittedData: any = null;

  constructor(private fb:FormBuilder){
    this.userform = this.fb.group({
      name:[''],
      password:['']
    })
  }

  formdata(){
    // console.log(val);
    this.submittedData = this.userform.value
    console.log('Submitted Data:', this.submittedData);
    
  }

}
