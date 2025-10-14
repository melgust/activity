import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'activity-list',
    loadChildren: () => import('./pages/breed-list/breed-list.module').then((m) => m.BreedListPageModule),
  },
  {
    path: 'soccer',
    loadChildren: () => import('./pages/soccer/soccer.module').then((m) => m.SoccerModule),
  },
  {
    path: 'basketball',
    loadChildren: () => import('./pages/basketball/basketball.module').then((m) => m.BasketballModule),
  },
  {
    path: 'chess',
    loadChildren: () => import('./pages/chess/chess.module').then((m) => m.ChessModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
