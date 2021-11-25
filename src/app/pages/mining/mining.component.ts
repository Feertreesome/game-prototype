import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css'],
})
export class MiningComponent implements OnInit {
  public grades = [1, 1, 1, 1, 1, 1];
  public grades2 = [1, 1, 1, 1, 1];
  public load = true;

  constructor() {}

  ngOnInit(): void {}
}
