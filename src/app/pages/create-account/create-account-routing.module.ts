import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAccountComponent} from "./create-account.component";


const routes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccountRoutingModule {}
