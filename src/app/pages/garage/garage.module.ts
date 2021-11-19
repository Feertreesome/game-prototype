import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageComponent } from './garage.component';
import { GarageRoutingModule } from './garage-routing.module';
// import { CardsModule } from '../cards/cards.module';
import {CardsComponent} from "../cards/cards.component";

@NgModule({
  declarations: [GarageComponent, CardsComponent],
  imports: [CommonModule, GarageRoutingModule],
})
export class GarageModule {}
