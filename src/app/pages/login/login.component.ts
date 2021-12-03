import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.min(3)]],
  });
  public error: string | undefined;

  public testEmail = 'elisev.dmitry@gmail.com';
  public testPassword = '123456';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  get email() {
    return this.emailForm.get('email') as FormControl;
  }

  get password() {
    return this.emailForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    console.log(this.password, 'this.password.errors');
  }

  async login() {
    this.error = '';
    if (this.email.value === this.testEmail && this.password.value === this.testPassword) {
      try {
        await this.authService.login(this.email.value, this.password.value);
        this.router.navigateByUrl('/investment-runs');
      } catch (e) {
        this.error = 'Invalid email or password';
      }
    }
  }
}
