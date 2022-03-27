import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from '../../Service/HTTP.service';
import { WeatherService } from '../../Service/weather.service';
import { IWeatherCard } from '../../ViewModel/IWeather-card';
import { IWeatherDays } from '../../ViewModel/IWeatherdays';

@Component({
  selector: 'app-next10days',
  templateUrl: './next10days.component.html',
  styleUrls: ['./next10days.component.css'],
})
export class Next10daysComponent implements OnInit {
  data: IWeatherDays[] = [];
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
    let m = this.http.data.subscribe((data) => {
        this.weathercard = {
          areaName: data.nearest_area[0].country[0].value,
          Lan_Lon:
            data.nearest_area[0].latitude +
            ',' +
            data.nearest_area[0].longitude,
          weatherIconUrl: data.current_condition[0].weatherIconUrl[0].value,
          weatherDesc: data.current_condition[0].weatherDesc[0].value,
          date: data.weather[0].date,
          temp_C: data.current_condition[0].temp_C,
          airQuality: this.weather.checkQualityIndex(
            Number(data.current_condition[0].air_quality['us-epa-index'])
          ),
          currentdate: data.weather[0].date,
        };
        this.data = data.weather.map((el: any, index: number) => {
          return {
            ...el,
            air_quality: this.weather.checkQualityIndex(
              Number(el.air_quality['us-epa-index'])
            ),
            astronomy: el.astronomy[0],
            day: this.weather.getDay(el.date),
            index: index,
            date: this.weather.formatDate(el.date),
          };
        });
        this.state=true

        console.log( data.weather);
        m.unsubscribe()
      });
    
    });
  }
  Accordion(ele: HTMLElement) {
    ele.classList.toggle('active');
    var panel = ele.nextElementSibling;
    if (panel?.classList.contains('d-block')) {
      panel.classList.remove('d-block');
      panel.classList.add('d-none');
    } else {
      panel?.classList.remove('d-none');
      panel?.classList.add('d-block');
    }
  }
 
}
