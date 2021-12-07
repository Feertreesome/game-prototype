import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  public grades = [1, 1, 1, 1, 1, 1];

  constructor() {}

  ngOnInit(): void {}
}
