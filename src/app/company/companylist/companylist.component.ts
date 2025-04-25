import { Component } from '@angular/core';

@Component({
  selector: 'app-companylist',
  standalone: false,
  templateUrl: './companylist.component.html',
  styleUrl: './companylist.component.css'
})
export class CompanylistComponent {
  company: any;

  constructor() {}

  ngOnInit(): void {
    this.company = [
      { name: 'HCL', country: 'India' },
      { name: 'TSC', country: 'UK' },
      { name: 'Sahosoft', country: 'India' }
    ];
  }

}
