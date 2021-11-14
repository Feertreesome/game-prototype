import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
});

  public testEmail = 'elisev.dmitry@gmail.com';
  public  testPassword = '123456';

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  get email() {
    return this.emailForm.get('email') as FormControl;
  }

  get password() {
    return this.emailForm.get('password') as FormControl;
  }

  ngOnInit(): void {

  }

  login() {
    if (this.email.value === this.testEmail && this.password.value === this.testPassword) {
      this.router.navigateByUrl('/investment-runs');
    }
  }

}
