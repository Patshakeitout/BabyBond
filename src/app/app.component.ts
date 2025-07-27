import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

import { NAV_LINKS } from './shared/nav-links';

declare let klaro: any; // Typen vom NPM-Package sind rudimentär


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
    // Klaro-Config und CSS/Skript wurden ja via angular.json geladen
    if (typeof klaro !== 'undefined') {
      klaro.run();  // zeigt das Banner nur, wenn noch keine Einwilligung
    }
  }
}
