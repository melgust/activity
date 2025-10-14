import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';


@NgModule({
  declarations: [
    ChessComponent
  ],
  imports: [
    CommonModule,
    ChessRoutingModule,
    LoaderModule,
    LatestCatsModule
  ],
  exports: [
    ChessComponent
  ]
})
export class ChessModule { }
