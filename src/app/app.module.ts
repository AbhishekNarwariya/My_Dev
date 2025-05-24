import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';
import { NumService } from './num.service';


@NgModule({
  declarations: [
   AppComponent,
   ChildComponent,
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
