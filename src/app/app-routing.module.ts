import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LogoutComponent } from './logout/logout.component';

// const routes: Routes = [
//   {
//   component: DashboardComponent,
//   path : 'dashboard',
//   canActivate:[AuthenticationGuard]
// },
// {
//   component: LoginComponent,
//   path :'',
// },
// {
// component : SignupComponent,
// path : 'signup',
// canActivate:[AuthenticationGuard]
// }

// ]


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent,canActivate:[AuthenticationGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard]},
  {path:'', redirectTo:'/login',pathMatch:'full'}
 // {path:'**',component:PageNotFoundComponent}
];



@NgModule({
  declarations: [],
  //imports: [    CommonModule , RouterModule.forRoot(routes,{useHash: true}) ],
  imports: [    CommonModule , RouterModule.forRoot(routes, {useHash: true}) ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
