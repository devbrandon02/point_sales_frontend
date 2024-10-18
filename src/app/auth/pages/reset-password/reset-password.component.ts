import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  @Input() loadingService: boolean = false;
  public formResetPassword: FormGroup;
  public isSuccessResetPassword: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.formResetPassword = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.min(10)]],
        confirm_password: ['', [Validators.required, Validators.min(10)]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  redirectLogin() {
    this.router.navigate(['/auth/login']);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirm_password')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  resetPassword() {
    console.log('Reset password');
    this.loadingService = true;

    this.loginService
      .resetPasswordService({
        password: this.formResetPassword.value.password,
        confirm_password: this.formResetPassword.value.confirm_password,
      })
      .subscribe({
        next: (res) => {
          // this.loadingService = false;
          this.isSuccessResetPassword = true;
          this.formResetPassword.reset();
          console.log(res);
        },
        error: (err) => {
          // this.loadingService = false;
          this.isSuccessResetPassword = false;
          this.formResetPassword.reset();
          console.log(err);
        },
      });
  }
}
