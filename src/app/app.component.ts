import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

import { NAV_LINKS } from './shared/nav-links';

declare let klaro: any;
declare let window: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'BabyBond';
  navLinks = NAV_LINKS;

  constructor(public router: Router) {}

  ngAfterViewInit() {
    if (typeof klaro !== 'undefined') {
      const manager = klaro.getManager(window.klaroConfig);
      if (!manager.confirmed) {
        klaro.show(window.klaroConfig);
      }
    }
  }
}
