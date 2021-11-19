import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angar',
  templateUrl: './angar.component.html',
  styleUrls: ['./angar.component.css'],
})
export class AngarComponent implements OnInit {
  public leftCards = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {}

  ngOnInit(): void {}
}
