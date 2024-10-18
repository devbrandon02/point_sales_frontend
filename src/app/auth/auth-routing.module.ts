import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'LoginPage' },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { animation: 'ForgotPasswordPage' },
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { animation: 'ResetPasswordPage' },
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
