import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderLogoComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderLogoComponent
  ]
})
export class SharedModule { }
