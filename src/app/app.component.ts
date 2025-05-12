import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // 👈 Import this
import { ParentComponent } from './parent/parent.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new_code';

   countries = [
    { code: 'IN', name: 'India', states: ['Maharashtra', 'Gujarat'] },
    { code: 'US', name: 'USA', states: ['California', 'Texas'] },
    { code: 'UK', name: 'UK', states: ['England', 'Scotland'] }
  ];

  selectedCountry = '';
  selectedState = '';
  states: string[] = [];

  onCountryChange(){
    console.log(this.selectedCountry);
    let country = this.countries.find(S=>S.code === this.selectedCountry)
    console.log(country);
    this.states = country ? country.states : [];

    console.log(this.states);

    this.selectedState = '';
    
    
    
  }

}
