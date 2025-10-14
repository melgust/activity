import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GAMES_CATALOG } from 'src/app/shared/games-catalog';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html'
})

export class BreedListComponent {

  constructor(
    private router: Router
  ) { }

  games = GAMES_CATALOG;

  viewGame(game: any) {
    this.router.navigate([game.route]);
  }

}
