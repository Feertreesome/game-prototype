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
          ticks: { display: false, maxTicksLimit: 7 },
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

  constructor() {}

  ngOnInit(): void {
    this.img.src = '/assets/img/avatart/avatar.png';

    this.img.onload = () => {
      this.showChart = true;
      // setInterval(() => {
      //   this.barChartData.forEach((line, index) => {
      //     line.data?.push(random(0, 100));
      //     line.pointStyle = ['' as any, ...(line.pointStyle as any)];
      //     // const b = line.pointStyle as any;
      //     // b?.unshift('1');
      //
      //     console.log();
      //   });
      //   this.barChartLabels.push('1');
      // }, 3000);
    };
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
