import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketballRoutingModule } from './basketball-routing.module';
import { BasketballComponent } from './basketball.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';


@NgModule({
  declarations: [
    BasketballComponent
  ],
  imports: [
    CommonModule,
    BasketballRoutingModule,
    LoaderModule,
    LatestCatsModule
  ],
  exports: [
    BasketballComponent
  ]
})
export class BasketballModule { }
