import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JengaComponent } from './jenga.component';

const routes: Routes = [
  {
    path: '',
    component: JengaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JengaRoutingModule { }
