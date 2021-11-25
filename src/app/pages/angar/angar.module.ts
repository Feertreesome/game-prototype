import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngarRoutingModule } from './angar-routing.module';
import { AngarComponent } from './angar.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [AngarComponent],
    imports: [CommonModule, AngarRoutingModule, ChartsModule],
})
export class AngarModule {}
