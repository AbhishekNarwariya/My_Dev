import { Component } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumService]
})
export class ChildComponent {
  arr = []
  
    constructor(private numservice:NumService){}
  
    ngOnInit(){
      this.arr  = this.numservice.getData()
    }
  
    AddData(num:any){
      this.numservice.addnum(num)
    }

}
