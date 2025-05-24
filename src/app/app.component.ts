import { Component} from '@angular/core';
import { NumService } from './num.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css'],
  providers:[NumService]
})
export class AppComponent  {
  title = 'my-angular-app';

  // imageUrl = 'assets/logo.png';
  arr = []

  constructor(private numservice:NumService){}

  ngOnInit(){
    this.arr  = this.numservice.getData()
  }

  AddData(num:any){
    this.numservice.addnum(num)
  }



}
