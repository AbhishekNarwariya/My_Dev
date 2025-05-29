import { Component, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular_code_daily';

  @ViewChild(ChildComponent) child! : ChildComponent

  ngAfterViewInit() {
     this.child.hellodost()
  }

  callChildMethod(){
    this.child.hellodost()
  }
}
