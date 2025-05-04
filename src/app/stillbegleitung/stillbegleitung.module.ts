import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StillbegleitungComponent } from './stillbegleitung/stillbegleitung.component';
import { BreastfeedingKnowledgeComponent } from './breastfeeding-knowledge/breastfeeding-knowledge.component';


@NgModule({
  declarations: [
    StillbegleitungComponent,
    BreastfeedingKnowledgeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StillbegleitungModule { }
