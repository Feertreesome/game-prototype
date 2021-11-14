import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
})
export class RunComponent implements OnInit {
  public participants = [
    {
      userName: 'My User',
      id: 1,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 2,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 3,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 4,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
    {
      userName: 'Username',
      id: 5,
      crypto: [{ crypto: '-2.5' }, { crypto: '2.5' }, { crypto: '-5.5' }, { crypto: '6.5' }, { crypto: '-0.5' }],
    },
  ];
  public selectedParticipant = false;
  public attackedParticipant: any;

  constructor() {}

  ngOnInit(): void {}

  selectUser(participant: any): void {
    this.attackedParticipant = participant;
    this.selectedParticipant = !this.selectedParticipant;
  }
}
