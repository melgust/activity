import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GAMES_CATALOG } from '../../shared/games-catalog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  searchValue: String = '';
  suggestedCats: any = [];
  hidden: boolean = true;

  games = GAMES_CATALOG;

  constructor(
    private router: Router
  ) { }

  mostSearched() {
    this.router.navigate(['/most-searched']);
  }

  viewGame(game: any) {
    this.router.navigate([game.route]);
  }

}
