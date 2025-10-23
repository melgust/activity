import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramingComponent } from './programing.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramingRoutingModule { }
