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
  public token_captcha: string | undefined;
  public statusForm = {
    isValidForm: true,
    message: '',
  };

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.token_captcha = undefined;
    this.formAuth = this.formBuilder.group({
      identity_document: ['', [Validators.required, Validators.min(10)]],
      password: ['', [Validators.required]],
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  redirectForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  authUserByTenant() {
    console.log('Auth user by tenant', this.formAuth.value);
    this.loadingService = true;

    if (this.formAuth.valid) {
      this.statusForm = {
        isValidForm: true,
        message: '',
      };

      const authUser: Login_Request = {
        identity_document: this.formAuth.value.identity_document,
        password: this.formAuth.value.password,
        g_recaptcha_response: '',
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
          };
          console.log(err);
        },
      });
    } else {
      this.statusForm = {
        isValidForm: false,
        message: 'Revise los campos del formulario',
      };

      this.loadingService = false;
      console.log('Form is invalid');
    }
  }
}
