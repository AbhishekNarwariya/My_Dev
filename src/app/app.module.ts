import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
   AppComponent,
   Parent1Component,
   Child1Component,
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
