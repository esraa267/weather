import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-forcast',
  templateUrl: './today-forcast.component.html',
  styleUrls: ['./today-forcast.component.css']
})
export class TodayForcastComponent implements OnInit {
@Input()todayForecast: any
  constructor() { }

  ngOnInit() {
  }

}
