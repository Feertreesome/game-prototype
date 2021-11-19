import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-won',
  templateUrl: './end-run.component.html',
  styleUrls: ['./end-run.component.css']
})
export class EndRunComponent implements OnInit {
  public checkWon = false;

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

  constructor() { }

  ngOnInit(): void {

  }

}
