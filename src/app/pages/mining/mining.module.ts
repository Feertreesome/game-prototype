import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiningComponent } from './mining.component';
import { MiningRoutingModule } from './mining-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [MiningComponent],
  imports: [
    CommonModule,
    MiningRoutingModule,
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
export class MiningModule {}
