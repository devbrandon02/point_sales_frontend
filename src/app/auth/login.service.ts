import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ForgotPassword_Request,
  Login_Request,
} from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  authUserByTenant(user: Login_Request) {
    this.http;
    return this.http.post(
      'http://localhost:8000/api/v1/auth/sign-in-credential',
      user,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  forgotPasswordService(payloadForgotPassword: ForgotPassword_Request) {
    console.log('Forgot password');

    return this.http.post(
      'http://localhost:8000/api/v1/auth/forgot-password',
      payloadForgotPassword,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  resetPasswordService(payloadResetPassword: any) {
    console.log('Reset password');

    return this.http.post(
      'http://localhost:8000/api/v1/auth/reset-password',
      payloadResetPassword,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
