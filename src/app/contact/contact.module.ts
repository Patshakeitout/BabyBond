import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: { breadcrumb: 'Kontakt' }
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    // For feature routing
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
