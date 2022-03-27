import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../Service/HTTP.service';
import { WeatherService } from '../../Service/weather.service';
import { IChart } from '../../ViewModel/Ichart';
import { IWeatherDetails } from '../../ViewModel/IWeatherDetails';
import { IWeatherCard } from '../../ViewModel/IWeather-card';
@Component({
  selector: 'app-cutrrent-weather',
  templateUrl: './cutrrent-weather.component.html',
  styleUrls: ['./cutrrent-weather.component.css'],
})
export class CutrrentWeatherComponent implements OnInit {
  weatherdetails: IWeatherDetails = {};
  weathercard: IWeatherCard = {};
  sentData: IChart[] = [];
  state:boolean=false
  constructor(private api: HTTPService,private weather:WeatherService) {}

  ngOnInit() {
    this.api.getCurrentweather();


    let m = this.api.data.subscribe((e) => {
      this.sentData = e.weather.map((data: any) => {
        return {
          value: Number(data.maxtempC),
          value2: Number(data.mintempC),
          date: new Date(data.date),
        };
      });

      this.weatherdetails = {
        ...e.current_condition[0],
        uvIndex:
          Number(e.current_condition[0].uvIndex) > 6
            ? e.current_condition[0].uvIndex + 'VeryHigh'
            : e.current_condition[0].uvIndex,
      };
      this.weathercard = {
        Lan_Lon: e.nearest_area[0].latitude + ',' + e.nearest_area[0].longitude,
        areaName: e.nearest_area[0].areaName[0].value,
        temp_C: e.current_condition[0].temp_C,
        weatherDesc: e.current_condition[0].weatherDesc[0].value,
        weatherIconUrl: e.current_condition[0].weatherIconUrl[0].value,
        airQuality: this.weather.checkQualityIndex(
          Number(e.current_condition[0].air_quality['us-epa-index'])
        ),
        date: e.weather[0].date,
      };
this.state=true
      m.unsubscribe();
    });
  }
 
}
