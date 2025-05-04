import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StillbegleitungComponent } from './stillbegleitung/stillbegleitung/stillbegleitung.component';
import { BeikostComponent } from './beikost/beikost/beikost.component';
import { TrageberatungComponent } from './trageberatung/trageberatung/trageberatung.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './shared/data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './shared/gtc/gtc.component';
import { BreastfeedingKnowledgeComponent } from './stillbegleitung/breastfeeding-knowledge/breastfeeding-knowledge.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    data: {
      breadcrumb: {
        label: 'app home',
        info: 'home'
      }
    }
  },
  {
    path: 'stillbegleitung',
    loadChildren: () =>
      import('./stillbegleitung/stillbegleitung.module')
        .then(m => m.StillbegleitungModule)
  },
  { path: 'stillbegleitung/stillwissen', component: BreastfeedingKnowledgeComponent, data: { breadcrumb: 'Stillwissen' } },
  { path: 'beikost', component: BeikostComponent, data: { breadcrumb: 'Beikost' } },
  { path: 'trageberatung', component: TrageberatungComponent, data: { breadcrumb: 'Trageberatung' } },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'data-privacy-policy', component: DataPrivacyPolicyComponent },
  { path: 'gtc', component: GtcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
