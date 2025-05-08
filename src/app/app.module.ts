import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   StudentdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
