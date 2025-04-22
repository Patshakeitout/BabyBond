import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

// Header components
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';

// Footer components 
import { FooterComponent } from './footer/footer.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './gtc/gtc.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,

    FooterComponent,
    DisclaimerComponent,
    DataPrivacyPolicyComponent,
    GtcComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // Angular Material
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    // Export all Material modules that other modules might use
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    // Export shared components
    HeaderComponent,
    HeaderLogoComponent,
    FooterComponent,
    DisclaimerComponent,
    DataPrivacyPolicyComponent,
    GtcComponent
  ]
})
export class SharedModule {}
