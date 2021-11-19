import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-defence-card',
  templateUrl: './defence-card.component.html',
  styleUrls: ['./defence-card.component.css'],
})
export class DefenceCardComponent implements OnInit {
  @Output() selectedCard = new EventEmitter<any>();
  @Input() attacksCards: any;

  constructor() {}

  ngOnInit(): void {
    this.attacksCards = ['card1', 'card2', 'card3'];
  }

  checkGlow(event: any) {
    this.selectedCard.emit('');
  }

  selectCard(card: any, event: any): void {
    this.selectedCard.emit(card);
  }

  select(): void {}
}
