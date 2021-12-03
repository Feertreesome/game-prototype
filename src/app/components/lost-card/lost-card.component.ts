import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styleUrls: ['./lost-card.component.css']
})
export class LostCardComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goToGarage(): void {
    this.route.navigateByUrl('/new-level');
  }

}
