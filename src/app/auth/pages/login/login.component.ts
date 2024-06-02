import { Component, Input } from '@angular/core';
import { Login_Request } from '../../../interfaces/auth.interfaces';
import { LoginService } from '../../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() loadingService: boolean = false;
  public formAuth: FormGroup;
  public statusForm = {
    isValidForm: true,
    message: '',
  }

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formAuth = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  authUserByTenant() {
    console.log('Auth user by tenant', this.formAuth.value);
    this.loadingService = true;

    if (this.formAuth.valid) {
      this.statusForm = {
        isValidForm: true,
        message: '',
      }

      const authUser: Login_Request = {
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
        g_recaptcha_response: '',
        tenantsId: 'distrito',
      };

      this.loginService.authUserByTenant(authUser).subscribe({
        next: (res) => {
          this.loadingService = false;
          console.log(res);

          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loadingService = false;
          this.statusForm = {
            isValidForm: false,
            message: 'El usuario no existe o la contraseña es incorrecta',
          }
          console.log(err);
        },
      });
    } else {
      this.statusForm = {
        isValidForm: false,
        message: 'Revise los campos del formulario',
      }

      this.loadingService = false;
      console.log('Form is invalid');
    }
  }
}
