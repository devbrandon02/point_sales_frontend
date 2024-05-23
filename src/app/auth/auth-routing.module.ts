import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    },
    {
      path: '**',
      redirectTo: 'login',
    }
  ]
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
