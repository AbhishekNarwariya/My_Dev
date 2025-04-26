import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},

  {path:'company', loadChildren:()=>import('../app/company/company.module').then(m=>m.CompanyModule)},
  
  {path:'person', loadChildren:()=>import('../app/person/person.module').then(m=>m.PersonModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
