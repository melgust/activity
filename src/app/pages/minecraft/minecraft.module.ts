import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinecraftRoutingModule } from './minecraft-routing.module';
import { MinecraftComponent } from './minecraft.component';


@NgModule({
  declarations: [
    MinecraftComponent
  ],
  imports: [
    CommonModule,
    MinecraftRoutingModule
  ],
  exports: [
    MinecraftComponent
  ]
})
export class MinecraftModule { }
