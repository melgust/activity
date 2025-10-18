import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  games: any;
  showLoader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = false;
  }

}
