import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunComponent } from './run.component';
import { RunRoutingModule } from './run-routing.module';

@NgModule({
  declarations: [RunComponent],
  imports: [CommonModule, RunRoutingModule],
})
export class RunModule {}
