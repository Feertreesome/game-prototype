import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewLevelComponent} from "./new-level.component";


const routes: Routes = [
  {
    path: '',
    component: NewLevelComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLevelRoutingModule {}
