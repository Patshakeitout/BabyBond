import { Component, EventEmitter, Output, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NAV_LINKS } from '../nav-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = NAV_LINKS;

  @Output() menuToggle = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu() {
    this.menuToggle.emit();
  }

  get whatIDoChildren() {
    return this.navLinks.find(l => l.title === 'Was ich mache')?.children ?? [];
  }

  get whatIAmChildren() {
    return this.navLinks.find(l => l.title === 'Wer ich bin')?.children ?? [];
  }

  reloadContact(event?: Event) {
    event?.preventDefault(); 
    if (isPlatformBrowser(this.platformId)) {
      window.location.assign('/kontakt'); 
    }
  }
}
