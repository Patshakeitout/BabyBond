import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';
import { WhatIDoModule } from './what-i-do/what-i-do.module';
import { BeikostModule } from './beikost/beikost.module';
import { TrageberatungModule } from './trageberatung/trageberatung.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingModule,
    WhatIDoModule,
    BeikostModule,
    TrageberatungModule
  ],
  providers: [
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
