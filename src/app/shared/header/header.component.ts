import { Component, EventEmitter, Output } from '@angular/core';
import { NAV_LINKS } from '../nav-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = NAV_LINKS;
  
  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu() {
    this.menuToggle.emit();
  }
  
  get whatIDoChildren() {
    return this.navLinks.find(l => l.title === 'Was ich mache')?.children ?? [];
  }

  get whatIAmChildren() {
    return this.navLinks.find(l => l.title === 'Wer ich bin')?.children ?? [];
  }
}
