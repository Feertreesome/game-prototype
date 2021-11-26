import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Color, Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { random } from 'lodash';

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
  public chart: any = null;
  public roundTime = 0;
  public img = new Image();

  public barChartOptions: ChartOptions = {
    tooltips: { enabled: false },
    legend: { display: false },
    responsive: true,
    aspectRatio: 1,
    animation: {
      duration: 3000,
      easing: 'linear',
    },
    elements: { line: { tension: 0 } },
    scales: {
      type: 'linear',
      xAxes: [
        {
          id: 'y-axis-1',
          gridLines: {
            display: true,
            color: '#597393',
            drawOnChartArea: false,
            drawBorder: true, // border before count
            drawTicks: false, // one more count on left
          },
          ticks: { beginAtZero: true, display: false },
        },
      ],
      yAxes: [
        {
          type: 'linear',
          ticks: { display: false, beginAtZero: true, min: 0, max: 120, maxTicksLimit: 120 },
          stacked: false,
          gridLines: {
            display: true,
            color: '#597393',
            drawOnChartArea: false,
            drawBorder: true, // border before count
            drawTicks: false, // one more count on left
          },
          scaleLabel: { display: false },
        },
      ],
    },
  };
  public barChartType: ChartType = 'line';
  public barChartLegend = false;
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7'];
  public lineChartColors: Color[] = [
    { borderColor: '#C80303' },
    { borderColor: '#6200DF' },
    { borderColor: '#B803C8' },
    { borderColor: '#C87903' },
    { borderColor: '#03C817' },
  ].map((color) => ({
    backgroundColor: 'transparent',
    borderColor: color.borderColor,
    pointBackgroundColor: 'transparent',
    // pointRadius: 8,
    // pointHitRadius: 8,
    // pointBorderWidth: 10,
    pointBorderColor: 'transparent',
    pointHoverBackgroundColor: 'transparent',
    pointHoverBorderColor: 'transparent',
  }));
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Series A', pointStyle: [this.img] },
    { data: [0], label: 'Series B', pointStyle: [this.img] },
    { data: [0], label: 'Series C', pointStyle: [this.img] },
    { data: [0], label: 'Series D', pointStyle: [this.img] },
    { data: [0], label: 'Series E', pointStyle: [this.img] },
  ];
  public showChart = false;
  // public date: string;
  @ViewChild('canvas') canvas: ElementRef | undefined;
  public nowTime = 0;
  public percent = 0;
  public percent2 = 0;
  public percent3 = 0;
  public allTimeCount = '15:00';
  public time = '5:00';
  public time2 = '5:00';
  public time3 = '5:00';
  public iterate = 1;
  public allTime = 0;
  public activeParticipant: any;

  constructor() {}

  ngOnInit(): void {
    this.img.src = '/assets/img/avatart/avatar.png';

    this.img.onload = () => {
      this.showChart = true;
      setInterval(() => {
        this.barChartData.forEach((line, index) => {
          line.data?.push(random(0, 100));
          line.pointStyle = ['' as any, ...(line.pointStyle as any)];
        });
        this.barChartLabels.push('1');
      }, 10000);
    };

    // 5 * 60
    this.allTime = 15 * 60 * 1000;
    this.roundTime = 5 * 60 * 1000;
    const onePercent = (5 * 60 * 1000) / 100;

    setInterval(() => {
      this.nowTime += 1000;
      if (this.iterate === 1) {
        this.percent = this.nowTime / onePercent;
      } else if (this.iterate === 2) {
        this.percent2 = this.nowTime / onePercent;
      } else {
        this.percent3 = this.nowTime / onePercent;
      }
      this.roundTime -= 1000;
      if (this.roundTime === 0) {
        this.iterate++;
        this.nowTime = 0;
        this.roundTime = 5 * 60 * 1000;
      }

      this.allTime -= 1000;

      this.allTimeCount = this.millisToMinutesAndSeconds(this.allTime);
      this.time = this.millisToMinutesAndSeconds(this.roundTime);
    }, 1000);
  }

  millisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + ((seconds as any) < 10 ? '0' : '') + seconds;
  }

  selectUser(participant: any): void {
    this.activeParticipant = participant;
    console.log(this.activeParticipant, 'this.activeParticipant');
    console.log(participant, 'participantparticipant');

    this.attackedParticipant = participant;
    this.selectedParticipant = true;
    this.userIsMe = this.isMe(participant);
  }

  isMe(participant: any) {
    return participant.userName === 'My User';
  }

  close() {
    this.activeParticipant = null;
    this.selectedParticipant = false;
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
