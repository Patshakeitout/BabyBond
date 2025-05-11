import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { PricesComponent } from './prices/prices.component';
import { NetworkComponent } from './network/network.component';


const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Wer ich bin' },
    children: [
      {
        path: 'ueber-mich',
        component: AboutMeComponent,
        data: { breadcrumb: 'Über mich' }
      },
      {
        path: 'preise',
        component: PricesComponent,
        data: { breadcrumb: 'Preise' }
      },
      {
        path: 'netzwerk',
        component: NetworkComponent,
        data: { breadcrumb: 'Netzwerk' }
      }
    ]
  }
]

@NgModule({
  declarations: [
    AboutMeComponent,
    PricesComponent,
    NetworkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WhoIAmModule { }
