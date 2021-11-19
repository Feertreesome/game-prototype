import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
})
export class AcademyComponent implements OnInit {
  public users = [
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
    { userName: 'user', info: 'UserInfo' },
  ];

  constructor(private rout: Router) {}

  ngOnInit(): void {}

  goToBanxter(): void {
    this.rout.navigateByUrl('/banxter');
  }

  goToAdd(): void {
    // this.rout.navigateByUrl('/academy');
  }
}
