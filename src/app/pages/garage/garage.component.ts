import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  public testedElements = [
    { crypto: 'Bitcoin', price: '-8.87%', id: 1 },
    { crypto: 'UDS', price: '-6.87%', id: 2 },
    { crypto: 'Bitcoin cash', price: '4.93%', id: 3 },
    { crypto: 'Litecoin', price: '-6.87%', id: 4 },
    { crypto: 'Cardano', price: '-7.34%', id: 5 },
    { crypto: 'Dai', price: '-2.89%', id: 6 },
    { crypto: 'Eos', price: '1.78%', id: 7 },
    { crypto: 'Ripple', price: '2.56%', id: 8 },
  ];
  public gridRowsCount = 'repeat(1, 1fr)';
  public selectedCrypto = [] as Array<number>;
  public activeTab = '' as string;

  constructor(private rout: Router, private render: Renderer2) {}

  ngOnInit(): void {
    // repeat(2, 1fr)
    this.gridRowsCount = `repeat(${Math.ceil(this.testedElements.length / 2 + 1)}, 1fr)`;
  }

  newClick(event: any): void {
    // console.log(event, 'EVENT');
    // const b = event.target as ElementRef;
    // this.render.addClass(event.target, 'new-class');
    // console.log(event.target.className, 'targ2');
  }

  page(page: string): void {
    this.activeTab = page;
  }

  selectDeal(cryptoName: number): void {
    if (this.selectedCrypto.length < 5 || this.selectedCrypto.includes(cryptoName)) {
      if (this.selectedCrypto.includes(cryptoName)) {
        const index = this.selectedCrypto.indexOf(cryptoName);
        this.selectedCrypto.splice(index, 1);
      } else {
        this.selectedCrypto.push(cryptoName);
      }
    }
  }

  startRun(): void {
    this.rout.navigateByUrl('/run');
  }
}
