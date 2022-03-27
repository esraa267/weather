import { Component, Input, OnInit } from '@angular/core';
import { IWeatherDetails } from '../../ViewModel/IWeatherDetails';

@Component({
  selector: 'app-daily-forcast',
  templateUrl: './daily-forcast.component.html',
  styleUrls: ['./daily-forcast.component.css'],
})
export class DailyForcastComponent implements OnInit {
  @Input() current: IWeatherDetails = {};
  @Input() boxshadow: boolean = true;
  constructor() {}

  ngOnInit() {
    let e = document.getElementsByClassName('weatherdetails');

    if (this.boxshadow) {
      for (let i = 0; i < e.length; i++) {
        e.item(i)?.classList.add('boxshadow');
      }
    }
  }
}
