// src/app/what-i-do/what-i-do.module.ts
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { Service6Component } from './service6/service6.component';


const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Was ich anbiete' },
    children: [
      {
        path: 'stillbegleitung',
        component: Service1Component,
        data: { breadcrumb: 'Stillbegleitung' }
      },
      {
        path: 'formularberatung',
        component: Service2Component,
        data: { breadcrumb: 'Flaschenernährung' }
      },
      {
        path: 'beikostberatung',
        component: Service3Component,
        data: { breadcrumb: 'Beikostberatung' }
      },
      {
        path: 'picky-eaters',
        component: Service4Component,
        data: { breadcrumb: 'Picky Eaters' }
      },
      {
        path: 'vegan',
        component: Service5Component,
        data: { breadcrumb: 'vegane Säuglingsernährung' }
      },
      {
        path: 'trageberatung',
        component: Service6Component,
        data: { breadcrumb: 'Trageberatung' }
      },
    ]
  }
];

@NgModule({
  declarations: [
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,
    Service6Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  // ← makes <router-outlet> & child routes work here
  ]
})
export class WhatIDoModule {}
