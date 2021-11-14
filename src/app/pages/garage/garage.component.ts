import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  public testedElements = [
    'element1',
    'element2',
    'element3',
    'element4',
    'element5',
    'element1',
    'element2',
    'element3',
    'element4',
    'element5',
    'element1',
    'element2',
    'element3',
    'element4',
    'element5',
  ];
  public gridRowsCount = 'repeat(1, 1fr)';

  constructor(private rout: Router) {}

  ngOnInit(): void {
    // repeat(2, 1fr)
    this.gridRowsCount = `repeat(${Math.ceil(this.testedElements.length / 2 + 1)}, 1fr)`;
  }

  startRun() {
    this.rout.navigateByUrl('/run');
  }
}
