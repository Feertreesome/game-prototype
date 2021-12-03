import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-won-card',
  templateUrl: './won-card.component.html',
  styleUrls: ['./won-card.component.css'],
})
export class WonCardComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToGarage(): void {
    this.route.navigateByUrl('/new-level');
  }
}
