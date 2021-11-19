import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RentComponent} from "./rent.component";
import {RentRoutingModule} from "./rent-routing.module";



@NgModule({
  declarations: [RentComponent],
  imports: [
    CommonModule, RentRoutingModule
  ]
})
export class RentModule { }
