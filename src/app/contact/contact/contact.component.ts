// contact.component.ts
import { Component, Inject, PLATFORM_ID, AfterViewInit, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Add the Visme embed script only once
    const id = 'vismeforms-embed';
    if (!document.getElementById(id)) {
      const s = this.renderer.createElement('script');
      s.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
      s.async = true;
      s.id = id;
      this.renderer.appendChild(document.body, s);
    }
  }
}
