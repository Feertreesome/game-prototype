import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AngarComponent} from "./angar.component";



const routes: Routes = [
  {
    path: '',
    component: AngarComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngarRoutingModule {}
