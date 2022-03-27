import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from '../../Service/HTTP.service';
import { WeatherService } from '../../Service/weather.service';
import { IWeatherDetails } from '../../ViewModel/IWeatherDetails';
import { IWeatherCard } from '../../ViewModel/IWeather-card';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent implements OnInit {
  data: IWeatherDetails[] = [];
  weathercard: IWeatherCard = {};
  state:boolean=false
  constructor(
    private router: ActivatedRoute,
    private http: HTTPService,
    private weather: WeatherService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((param) => {
      this.http.searchByLatLog(param.get('l')!);
      this.http.data.subscribe((data) => {
       
        
        this.weathercard = {
          areaName: data.nearest_area[0].country[0].value,
          Lan_Lon:
            data.nearest_area[0].latitude +
            ',' +
            data.nearest_area[0].longitude,
          weatherIconUrl: data.current_condition[0].weatherIconUrl[0].value,
          weatherDesc: data.current_condition[0].weatherDesc[0].value,
          date: data.weather[Number(param.get('index'))].date,
          temp_C: data.current_condition[0].temp_C,
          airQuality: this.weather.checkQualityIndex(
            Number(data.current_condition[0].air_quality['us-epa-index'])
          ),
          currentdate: data.weather[0].date,
        };
        this.data = data.weather[Number(param.get('index'))].hourly.map((el: any) => {
          return {
            ...el,
            time: this.weather.checkTime(String(el.time / 100)),
            img: el.weatherIconUrl[0].value,
            weatherDesc: el.weatherDesc[0].value,
          };
        });
        this.data = this.data.filter((el: any, index: number) => {
          return index != 0;
        });
     
        this.state=true
      });
    });
  }

 
}
