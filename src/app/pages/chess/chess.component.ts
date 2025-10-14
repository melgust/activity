import { Component } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent {
  games: any;
  showLoader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = false;
  }
}
