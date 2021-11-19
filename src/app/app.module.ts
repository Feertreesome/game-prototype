import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FixedHeightDirective } from './directives/fixed-height.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FixedHeightDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [FixedHeightDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
