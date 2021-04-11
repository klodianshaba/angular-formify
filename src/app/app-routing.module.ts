import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembershipComponent} from './examples/membership/membership.component';
import {RegisterComponent} from './examples/register/register.component';
import {LoginComponent} from './examples/login/login.component';

const routes: Routes = [
  {path: 'membership', component: MembershipComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'membership', pathMatch: 'full'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
