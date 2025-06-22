import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './shared/data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './shared/gtc/gtc.component';
import { ContactComponent } from './contact/contact/contact.component';

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
      import('./what-i-do/what-i-do.module').then(m => m.WhatIDoModule),
  },

  {
    path: 'wer-ich-bin',
    loadChildren: () =>
      import('./who-i-am/who-i-am.module').then(m => m.WhoIAmModule),
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
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
