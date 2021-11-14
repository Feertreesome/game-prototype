import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-investment-runs',
  templateUrl: './investment-runs.component.html',
  styleUrls: ['./investment-runs.component.css'],
})
export class InvestmentRunsComponent implements OnInit {
  public activeTestData = [
    { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
    { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
    { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
    { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
    { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
    { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
    { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
    { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
    { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
    { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
  ];

// { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
// { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
// { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
// { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
// { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
// { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
// { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
// { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
// { runName: 'Hamster', prizePool: 300, startTime: '0:01' },
// { runName: 'Short selling', prizePool: 3500, startTime: '2:34' },
// { runName: 'Wolf hear', prizePool: 9300, startTime: '0:34' },
// { runName: 'Hamster', prizePool: 300, startTime: '0:01' },

  public endedTestData = [
    { runName: 'Short selling', prizePool: 3500, startTime: 'won' },
    { runName: 'Wolf hear', prizePool: 9300, startTime: 'lost' },
    { runName: 'Hamster', prizePool: 300, startTime: 'won' },
  ];

  constructor(
    private rout: Router
  ) {}

  ngOnInit(): void {}

  handleScroll() {
    console.log('hello scroll');
  }

  goToGarage(card: any) {
    this.rout.navigateByUrl('/garage')
  }
}
