// src/app/stillbegleitung/stillbegleitung.module.ts
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StillbegleitungComponent }        from './stillbegleitung/stillbegleitung.component';
import { BreastfeedingKnowledgeComponent } from './breastfeeding-knowledge/breastfeeding-knowledge.component';

const routes: Routes = [
  {
    path: '',
    component: StillbegleitungComponent,
    data: { breadcrumb: 'Stillbegleitung' },
    children: [
      {
        path: 'stillwissen',
        component: BreastfeedingKnowledgeComponent,
        data: { breadcrumb: 'Stillwissen' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    StillbegleitungComponent,
    BreastfeedingKnowledgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  // ← makes <router-outlet> & child routes work here
  ]
})
export class StillbegleitungModule {}
