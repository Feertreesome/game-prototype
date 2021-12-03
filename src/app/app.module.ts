import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FixedHeightDirective } from './directives/fixed-height.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptor/interceptor.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FixedHeightDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  exports: [FixedHeightDirective],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
