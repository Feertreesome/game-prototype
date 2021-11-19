import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-attack-card',
  templateUrl: './attack-card.component.html',
  styleUrls: ['./attack-card.component.css'],
})
export class AttackCardComponent implements OnInit {
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
