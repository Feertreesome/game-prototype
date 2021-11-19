import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';

@NgModule({
  declarations: [AcademyComponent],
  imports: [CommonModule, AcademyRoutingModule],
})
export class AcademyModule {}
