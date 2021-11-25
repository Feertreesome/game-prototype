import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunComponent } from './run.component';
import { RunRoutingModule } from './run-routing.module';
import { AttackCardComponent } from '../../components/attack-card/attack-card.component';
import { DefenceCardComponent } from '../../components/defence-card/defence-card.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [RunComponent, AttackCardComponent, DefenceCardComponent],
    imports: [CommonModule, RunRoutingModule, ChartsModule],
})
export class RunModule {}
