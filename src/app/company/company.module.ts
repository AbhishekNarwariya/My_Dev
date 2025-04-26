import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanylistComponent } from './companylist/companylist.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanylistComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor(){
    console.log("hello company");
    
  }
 }
