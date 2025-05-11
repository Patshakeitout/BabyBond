import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Service1Component } from './what-i-do/service1/service1.component';
import { BeikostComponent } from './beikost/beikost/beikost.component';
import { TrageberatungComponent } from './trageberatung/trageberatung/trageberatung.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './shared/data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './shared/gtc/gtc.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    data: {
      breadcrumb: {
        info: 'home'
      }
    }
  },
  {
    path: 'beratung',
    loadChildren: () =>
      import('./what-i-do/what-i-do.module')
        .then(m => m.WhatIDoModule)
  },
  {
    path: 'wer-ich-bin',
    loadChildren: () =>
      import('./who-i-am/who-i-am.module')
        .then(m => m.WhoIAmModule)
  },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'data-privacy-policy', component: DataPrivacyPolicyComponent },
  { path: 'gtc', component: GtcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
