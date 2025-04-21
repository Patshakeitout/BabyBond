import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FooterComponent } from './footer/footer.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './gtc/gtc.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderLogoComponent,
    DisclaimerComponent,
    DataPrivacyPolicyComponent,
    GtcComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    FooterComponent,
    HeaderLogoComponent,
    DisclaimerComponent
  ]
})
export class SharedModule {}
