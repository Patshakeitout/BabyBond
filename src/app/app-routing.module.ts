import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StillbegleitungComponent } from './stillbegleitung/stillbegleitung/stillbegleitung.component';
import { BeikostComponent } from './beikost/beikost/beikost.component';
import { TrageberatungComponent } from './trageberatung/trageberatung/trageberatung.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'stillbegleitung', component: StillbegleitungComponent },
  {path: 'beikost', component: BeikostComponent },
  {path: 'trageberatung', component: TrageberatungComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
