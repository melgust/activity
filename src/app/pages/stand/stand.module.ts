import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandRoutingModule } from './stand-routing.module';
import { StandComponent } from './stand.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';


@NgModule({
  declarations: [
    StandComponent
  ],
  imports: [
    CommonModule,
    StandRoutingModule,
    LoaderModule,
    LatestCatsModule
  ],
  exports: [
    StandComponent
  ]
})
export class StandModule { }
