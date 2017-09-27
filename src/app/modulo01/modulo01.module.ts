import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Modulo01Component } from './modulo01.component';

const routes: Routes = [
  { path: '', component: Modulo01Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Modulo01Component]
})
export class Modulo01Module { }
