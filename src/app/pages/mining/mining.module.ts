import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiningComponent } from './mining.component';
import { MiningRoutingModule } from './mining-routing.module';

@NgModule({
  declarations: [MiningComponent],
  imports: [CommonModule, MiningRoutingModule],
})
export class MiningModule {}
