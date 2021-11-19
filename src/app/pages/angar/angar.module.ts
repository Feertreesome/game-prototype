import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngarRoutingModule } from './angar-routing.module';
import { AngarComponent } from './angar.component';

@NgModule({
  declarations: [AngarComponent],
  imports: [CommonModule, AngarRoutingModule],
})
export class AngarModule {}
