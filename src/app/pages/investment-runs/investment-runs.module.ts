import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InvestmentRunsComponent} from "./investment-runs.component";
import {InvestmentRunsRoutingModule} from "./investments-runs-routing.module";



@NgModule({
  declarations: [InvestmentRunsComponent],
  imports: [
    CommonModule,
    InvestmentRunsRoutingModule
  ]
})
export class InvestmentRunsModule { }
