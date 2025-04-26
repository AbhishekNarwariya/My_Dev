import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  ngOnInit(){
    let a = localStorage.getItem('name')

    console.log(a)


    localStorage.removeItem('userID')
  }


}
