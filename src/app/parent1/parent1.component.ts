import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: false,
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})
export class Parent1Component {
  ngOnInit(){
    localStorage.setItem('name','abhishek')
  }

}
