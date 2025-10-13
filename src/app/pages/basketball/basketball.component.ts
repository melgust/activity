import { Component } from '@angular/core';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent {

  games: any;
  showLoader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = false;
  }

}
