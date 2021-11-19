import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddComponent} from "./add.component";


const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {}
