import { Component } from '@angular/core';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent {

  games: any;
  showLoader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = false;
  }

}
