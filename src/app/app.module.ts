import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { StillbegleitungModule } from './stillbegleitung/stillbegleitung.module';
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
    HomeModule,
    StillbegleitungModule,
    BeikostModule,
    TrageberatungModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
