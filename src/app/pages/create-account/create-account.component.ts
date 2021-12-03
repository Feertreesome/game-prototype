import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    confirmPassword: ['', [Validators.required]],
  });

  public error: string | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  get email() {
    return this.emailForm.get('email') as FormControl;
  }

  get passwordField() {
    return this.emailForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.emailForm.get('confirmPassword') as FormControl;
  }

  async createAccount(): Promise<void> {
    this.error = '';
    if (this.email.value) {
      try {
        await this.authService.login(this.email.value, this.passwordField.value);
        this.router.navigateByUrl('/profile');
      } catch (e) {
        this.error = 'This user already exist';
      }
    }
  }

  ngOnInit(): void {}
}
