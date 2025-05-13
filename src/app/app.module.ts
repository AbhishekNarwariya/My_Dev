import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   DashboardComponent,
   ProductsComponent,
   ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
