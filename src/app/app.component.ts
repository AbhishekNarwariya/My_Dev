import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular_code_daily';
  pdata:any = ''
 ParentData(val:any){
  this.pdata = val

 }
}
