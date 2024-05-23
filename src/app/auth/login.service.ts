import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login_Request } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  authUserByTenant(user: Login_Request){
    this.http
    return this.http.post('http://localhost:8000/api/v1/auth/login', user, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "X-Tenant-domain": "distrito"
      }
    })
  }
}
