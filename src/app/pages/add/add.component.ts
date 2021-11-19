import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public cards = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
