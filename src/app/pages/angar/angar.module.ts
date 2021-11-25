import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngarRoutingModule } from './angar-routing.module';
import { AngarComponent } from './angar.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AngarComponent],
  imports: [
    CommonModule,
    AngarRoutingModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      animationDuration: 300,
    }),
  ],
})
export class AngarModule {}
