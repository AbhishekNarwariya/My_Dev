import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
