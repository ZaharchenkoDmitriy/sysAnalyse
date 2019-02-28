import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouteModule]
})


export class RouteModule { }
