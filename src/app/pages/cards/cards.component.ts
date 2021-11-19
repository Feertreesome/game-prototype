import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public runCards = [1, 2, 3, 4,1];
  public openCards = [1, 2, 3];
  public lockedCards = [1, 2, 3, 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
