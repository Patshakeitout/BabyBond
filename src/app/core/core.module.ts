import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

// Shared Module for HeaderLogo and HeaderComponent
import { SharedModule } from '../shared/shared.module'; 
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // because Routing done in HeaderComponent

    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    // Shared Module for HeaderLogo
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
