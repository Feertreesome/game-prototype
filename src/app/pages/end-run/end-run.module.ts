import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndRunComponent } from './end-run.component';
import { EndRunRoutingModule } from './end-run-routing.module';
import { WonCardComponent } from '../../components/won-card/won-card.component';
import {LostCardComponent} from "../../components/lost-card/lost-card.component";

@NgModule({
  declarations: [EndRunComponent, WonCardComponent, LostCardComponent],
  imports: [CommonModule, EndRunRoutingModule],
})
export class EndRunModule {}
