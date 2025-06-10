import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { NAV_LINKS } from './shared/nav-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BabyBond';
  navLinks = NAV_LINKS;

  constructor(public router: Router) {}

}
