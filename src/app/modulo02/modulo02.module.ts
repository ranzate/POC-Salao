import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Modulo02Component } from './modulo02.component';

const routes: Routes = [
  { path: '', component: Modulo02Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Modulo02Component]
})
export class Modulo02Module { }
