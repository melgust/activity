import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramingRoutingModule } from './programing-routing.module';
import { ProgramingComponent } from './programing.component';


@NgModule({
  declarations: [
    ProgramingComponent
  ],
  imports: [
    CommonModule,
    ProgramingRoutingModule
  ],
  exports: [
    ProgramingComponent
  ]
})
export class ProgramingModule { }
