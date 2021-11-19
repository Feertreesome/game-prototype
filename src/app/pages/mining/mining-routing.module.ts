import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MiningComponent} from "./mining.component";

const routes: Routes = [
  {
    path: '',
    component: MiningComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiningRoutingModule {}
