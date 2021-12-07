import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageComponent } from './garage.component';
import { GarageRoutingModule } from './garage-routing.module';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [GarageComponent],
  imports: [CommonModule, GarageRoutingModule, CardsModule],
})
export class GarageModule {}
