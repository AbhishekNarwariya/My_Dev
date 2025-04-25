import { Component } from '@angular/core';

@Component({
  selector: 'app-personlist',
  standalone: false,
  templateUrl: './personlist.component.html',
  styleUrl: './personlist.component.css'
})
export class PersonlistComponent {
  persons: any;

  constructor() {}

  ngOnInit(): void {
    this.persons = [
      { name: 'Rahul', city: 'Delhi' },
      { name: 'John', city: 'London' },
      { name: 'Amit', city: 'Mumbai' }
    ];
  }

}
