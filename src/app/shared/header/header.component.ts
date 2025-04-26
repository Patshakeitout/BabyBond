import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /** Fires when the user clicks the menu icon */
  @Output() menuToggle = new EventEmitter<void>();

  linksVisible = true;

  toggleMenu() {
    this.menuToggle.emit();
    this.linksVisible = !this.linksVisible;
  }

}
