import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banxter',
  templateUrl: './banxter.component.html',
  styleUrls: ['./banxter.component.css'],
})
export class BanxterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigateByUrl('/profile');
  }
}
