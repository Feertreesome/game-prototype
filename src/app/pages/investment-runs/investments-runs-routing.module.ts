import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvestmentRunsComponent} from "./investment-runs.component";



const routes: Routes = [
  {
    path: '',
    component: InvestmentRunsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentRunsRoutingModule {}
