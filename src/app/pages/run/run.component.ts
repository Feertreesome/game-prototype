import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
  animations: [
    // trigger('boardState', [
    //   state(
    //     'show',
    //     style({
    //       opacity: '{{min_height}}',
    //     }),
    //     { params: { min_height: '0' } },
    //   ),
    //   state(
    //     'hide',
    //     style({
    //       opacity: '{{min_height}}',
    //     }),{ params: { min_height: '0' } },
    //   ),
    //   transition('show <=> hide', animate('600ms ease-out')),
    //   // transition('hide => show', animate('1000ms ease-in')),
    // ]),
  ],
})
export class RunComponent implements OnInit {
  public test = 4;
  public usrOrder = {};
  public participants = [
    {
      userName: 'My User',
      id: 1,
      leader: 1,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 2,
      leader: 2,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 3,
      leader: 3,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 4,
      leader: 4,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 5,
      leader: 5,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
  ];
  public selectedParticipant = false;
  public attackedParticipant: any;
  public attackSelectedCard: any;
  public userIsMe = false;
  public userOrder = [0, 1, 2, 3, 4];
  public visible = 'show';

  constructor() {}

  ngOnInit(): void {
    // this.visible = 'show';
    // setTimeout(() => {
    //   // this.userOrder = [3, 0, 2, 4, 1];
    //   this.userOrder = [3, 0, 2, 4, 1];
    //   console.log(this.userOrder, 'this.userOrder');
    //   this.visible = 'hide';
    // }, 4000);
    //
    // setTimeout(() => {
    //   this.userOrder = [1, 4, 0, 3, 1];
    //   console.log(this.userOrder, 'old user order');
    //
    //   this.userOrder = [1, 3, 2, 0, 4];
    // }, 8000);
  }

  selectUser(participant: any): void {
    this.attackedParticipant = participant;
    this.selectedParticipant = !this.selectedParticipant;
    this.userIsMe = this.isMe(participant);
  }

  isMe(participant: any) {
    return participant.userName === 'My User';
  }

  selectedCard(event: any) {
    if (!event) {
      return;
    }
    this.attackSelectedCard = event;
    console.log(event, 'event');
  }

  applyEffect(effect: any) {
    if (!effect) {
      return;
    }

    console.log('Effect applyed!!', effect);
    this.attackSelectedCard = null;
  }
}
