import { Component, EventEmitter, Output } from '@angular/core';
import { NAV_LINKS } from '../nav-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /** Navigation elements */
  navLinks = NAV_LINKS;

  get whatIDoChildren() {
    const subNavs = this.navLinks.find(
      link => link.title === 'Was ich mache'
    )?.children || [];

    return subNavs;
  }

  get whatIAmChildren() {
    const subNavs = this.navLinks.find(
      link => link.title === 'Wer ich bin'
    )?.children || [];

    return subNavs;
  }


  /** Fires when the user clicks the menu icon */
  @Output() menuToggle = new EventEmitter<void>();

  linksVisible = true;

  toggleMenu() {
    this.menuToggle.emit();
    this.linksVisible = !this.linksVisible;
  }

}
