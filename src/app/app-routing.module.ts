import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StillbegleitungComponent } from './stillbegleitung/stillbegleitung/stillbegleitung.component';
import { BeikostComponent } from './beikost/beikost/beikost.component';
import { TrageberatungComponent } from './trageberatung/trageberatung/trageberatung.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';
import { DataPrivacyPolicyComponent } from './shared/data-privacy-policy/data-privacy-policy.component';
import { GtcComponent } from './shared/gtc/gtc.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'stillbegleitung', component: StillbegleitungComponent },
  {path: 'beikost', component: BeikostComponent },
  {path: 'trageberatung', component: TrageberatungComponent },
  {path: 'disclaimer', component: DisclaimerComponent },
  {path: 'data-privacy-policy', component: DataPrivacyPolicyComponent },
  {path: 'gtc', component: GtcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
