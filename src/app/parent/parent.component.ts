import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userForm:FormGroup

  sendData(){
    console.log(this.userForm)
  }

}
