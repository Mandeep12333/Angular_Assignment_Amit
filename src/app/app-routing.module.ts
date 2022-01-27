import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  component: DashboardComponent,
  path : 'dashboard'
},
{
  component: LoginComponent,
  path :''
},
{
component : SignupComponent,
path : 'signup'
}

]

@NgModule({
  declarations: [],
  imports: [    CommonModule , RouterModule.forRoot(routes,{useHash: true}) ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
