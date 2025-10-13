import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerComponent } from './soccer.component';

const routes: Routes = [
  {
    path: '',
    component: SoccerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoccerRoutingModule { }
