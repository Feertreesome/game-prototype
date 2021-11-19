import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewLevelComponent } from './new-level.component';
import { NewLevelRoutingModule } from './new-level-routing.module';

@NgModule({
  declarations: [NewLevelComponent],
  imports: [CommonModule, NewLevelRoutingModule],
})
export class NewLevelModule {}
