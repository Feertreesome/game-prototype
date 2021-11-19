import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanxterComponent } from './banxter.component';
import { BanxterRoutingModule } from './banxter-routing.module';

@NgModule({
  declarations: [BanxterComponent],
  imports: [CommonModule, BanxterRoutingModule],
})
export class BanxterModule {}
