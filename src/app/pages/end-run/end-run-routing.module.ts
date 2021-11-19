import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndRunComponent } from './end-run.component';

const routes: Routes = [
  {
    path: '',
    component: EndRunComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndRunRoutingModule {}
