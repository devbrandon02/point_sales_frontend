import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  @Input() loadingService: boolean = false;
  public formAuth: FormGroup;
  public isSuccessForgotPassword: boolean = false;
  public errorForgotPassword: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.formAuth = this.formBuilder.group({
      identity_document: ['', [Validators.required, Validators.min(10)]],
    });
  }

  redirectLogin() {
    this.router.navigate(['/auth/login']);
  }

  forgotPassword() {
    console.log('Forgot password');
    this.loadingService = true;
    
    this.loginService
      .forgotPasswordService({
        identity_document: this.formAuth.value.identity_document,
      })
      .subscribe({
        next: (res) => {
          this.loadingService = false;
          this.formAuth.reset();
          this.isSuccessForgotPassword = true;
          this.errorForgotPassword = false;
          console.log(res);
        },
        error: (err) => {
          this.loadingService = false;
          this.isSuccessForgotPassword = false;
          this.errorForgotPassword = true;
          console.log(err);
        },
      });
  }
}
