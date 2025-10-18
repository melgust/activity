import { Component } from '@angular/core';

@Component({
  selector: 'app-jenga',
  templateUrl: './jenga.component.html',
  styleUrls: ['./jenga.component.css']
})
export class JengaComponent {

  games: any;
  showLoader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = false;
  }

}
