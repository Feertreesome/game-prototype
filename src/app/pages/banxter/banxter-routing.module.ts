import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BanxterComponent} from "./banxter.component";


const routes: Routes = [
  {
    path: '',
    component: BanxterComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanxterRoutingModule {}
