import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css'],
})
export class MiningComponent implements OnInit {
  public grades = ['Poor', 'Lower', 'Middle', 'Upper', 'Rotschild', 'Reptilian'];
  public grades2 = [
    {
      name: 'Video cards',
      status: 'Default',
      rent: true,
      collectTime: 1000 * 30,
      fullTime: 60 * 1000 * 60,
      collect: false,
    },
    {
      name: 'Rig video cards',
      status: 'Rent',
      rent: true,
      collectTime: 2 * 1000 * 60,
      fullTime: 60 * 1000 * 60,
      collect: false,
    },
    { name: 'ASIC', status: 'Rent', rent: true, collectTime: 10 * 1000 * 60, fullTime: 60 * 1000 * 60, collect: false },
    {
      name: 'GARAGE',
      status: 'Rent',
      rent: true,
      collectTime: 5 * 1000 * 60,
      fullTime: 60 * 1000 * 60,
      collect: false,
    },
    { name: 'Plant', status: '-', rent: false, collectTime: 15 * 1000 * 60, fullTime: 60 * 1000 * 60, collect: false },
  ];
  public load = false;
  public selectItem = 'Video cards';
  public selectLevelName: string | undefined;
  public timeLeft: any[] | undefined;
  public percent: number | undefined;
  public selectActiveMiner = this.grades2[0];
  public selectRent = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.grades2.forEach((miner) => {
        if (miner.collectTime) {
          miner.collectTime -= 1000;
          if (this.selectItem === miner.name) {
            const onePercent = miner.fullTime / 100;
            this.percent = miner.collectTime / onePercent;

            const stringifyTime = this.millisToMinutesAndSeconds(miner.collectTime);
            const separateTime = stringifyTime.split(':', 4);

            this.timeLeft = [...separateTime];
            if (this.timeLeft.length < 4) {
              let count = 4 - this.timeLeft.length;
              for (; !!count; count--) {
                this.timeLeft.unshift('0');
              }
            }
          }
        } else {
          miner.collect = true;
        }
      });
    }, 1000);
  }

  millisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + ((seconds as any) < 10 ? '0' : '') + seconds;
  }

  goBack(): void {
    this.router.navigateByUrl('/profile');
  }

  selectMiner(name: string, activeMiner: any): void {
    this.selectItem = name;
    this.selectActiveMiner = activeMiner;
  }

  selectLevel(levelName: string): void {
    this.selectLevelName = levelName;
  }

  selectRentTime(rent: number) {
    this.selectRent = rent;
  }

  collectTokens(): void {
    let indexItem = 0;
    this.grades2.map((grade, index) => {
      if (this.selectItem === grade.name) {
        indexItem = index;
        return;
      }
    });
    this.grades2[indexItem].collectTime = this.grades2[indexItem].fullTime;
    this.grades2[indexItem].collect = false;
  }
}
