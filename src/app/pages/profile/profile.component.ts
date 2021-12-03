import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { random } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public img = new Image();

  public barChartOptions: ChartOptions = {
    tooltips: { enabled: false },
    legend: { display: false },
    responsive: true,
    aspectRatio: 5,
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
            display: false,
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
          ticks: { beginAtZero: true, display: false, min: -20, max: 120, maxTicksLimit: 120 },
          stacked: false,
          gridLines: {
            display: false,
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
    borderWidth: 2,
    pointBackgroundColor: 'transparent',
    pointRadius: 2,
    pointHitRadius: 2,
    pointBorderWidth: 0,
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.img.src = '/assets/img/avatart/avatar.png';
    this.img.height = 24;
    this.img.width = 24;

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
  }

  goToMiner(): void {
    this.router.navigateByUrl('/mining');
  }

  goToEducation(): void {
    this.router.navigateByUrl('/academy');
  }

  goToInvestments(): void {
    this.router.navigateByUrl('/investment-runs');
  }

  goToGarage(): void {
    this.router.navigateByUrl('/garage');
  }

  goToBanxter(): void {
    this.router.navigateByUrl('/banxter');
  }
}
