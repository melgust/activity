import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JengaRoutingModule } from './jenga-routing.module';
import { JengaComponent } from './jenga.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';


@NgModule({
  declarations: [
    JengaComponent
  ],
  imports: [
    CommonModule,
    JengaRoutingModule,
    LoaderModule,
    LatestCatsModule
  ],
  exports: [
    JengaComponent
  ]
})
export class JengaModule { }
