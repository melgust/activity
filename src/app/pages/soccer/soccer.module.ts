import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoccerRoutingModule } from './soccer-routing.module';
import { SoccerComponent } from './soccer.component';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';


@NgModule({
  declarations: [
    SoccerComponent
  ],
  imports: [
    CommonModule,
    SoccerRoutingModule,
    LoaderModule,
    LatestCatsModule
  ],
  exports: [
    SoccerComponent
  ]
})
export class SoccerModule { }
