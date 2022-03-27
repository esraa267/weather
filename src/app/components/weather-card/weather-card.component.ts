import { Component, Input, OnInit } from '@angular/core';
import { IWeatherCard } from '../../ViewModel/IWeather-card';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weathercard: IWeatherCard = {};
  @Input() displaynone: boolean =false;
  constructor() {}

  ngOnInit() {
 

  }
}
