import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-level',
  templateUrl: './new-level.component.html',
  styleUrls: ['./new-level.component.css'],
})
export class NewLevelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile(): void {
    this.router.navigateByUrl('/profile');
  }
}
