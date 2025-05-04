// src/app/shared/breadcrumb/breadcrumb.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.router = router;
    this.activatedRoute = activatedRoute;  
   }

  ngOnInit() {
    // Define the home icon/link
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    // Rebuild on each navigation end
    this.router.events // Observable emits all router lifecycle events
      .pipe(
        filter(evt => evt instanceof NavigationEnd), // only filter events those URL change is fully done
        map(() => this.buildBreadcrumb(this.activatedRoute.root))
      )
      .subscribe(items => this.items = items);
  }

  private buildBreadcrumb(route: ActivatedRoute, url: string = '', items: MenuItem[] = []): MenuItem[] {
    const children = route.children;
    if (children.length === 0) return items;

    for (const child of children) {
      const routeURL = child.snapshot.url.map(seg => seg.path).join('/');
      if (routeURL) {
        url += `/${routeURL}`;
        const label = child.snapshot.data['breadcrumb'] || this.toLabel(routeURL);
        items.push({ label, routerLink: url });
      }
      return this.buildBreadcrumb(child, url, items);
    }
    return items;
  }

  private toLabel(str: string): string {
    return str.replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
}
