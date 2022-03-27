import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChart } from 'src/app/ViewModel/Ichart';
import { HTTPService } from '../../Service/HTTP.service';
import { IWeatherCard } from '../../ViewModel/IWeather-card';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  todayForecast: any;
  country: string = '';
  Lan_Lon: string = '';
  current: IWeatherCard = {  };
  state:boolean=false;
  sentData:IChart[]=[];
  constructor(private param: ActivatedRoute, private http: HTTPService) {}

  ngOnInit() {
    this.param.paramMap.subscribe((p) => {
      this.http.searchByLatLog(p.get('q') ? p.get('q')! : '');
      let m = this.http.data.subscribe((e) => {
        this.sentData = e.weather.map((data: any) => {
          return {
            value: Number(data.maxtempC),
            value2: Number(data.mintempC),
            date: new Date(data.date),
          };
        });
        this.country = e.nearest_area[0].areaName[0].value;
        this.Lan_Lon =
          e.nearest_area[0].latitude + ',' + e.nearest_area[0].longitude;
        this.current = {
           ...e.current_condition[0],
          weatherDesc: e.current_condition[0].weatherDesc[0].value,
          weatherIconUrl: e.current_condition[0].weatherIconUrl[0].value,
        };
        this.todayForecast = this.todayForecast = [
          { ...e.weather[0].hourly[1], text: 'Morning' },
          { ...e.weather[0].hourly[3], text: 'Afternoon' },
          { ...e.weather[0].hourly[5], text: 'Evening' },
          { ...e.weather[0].hourly[7], text: 'Night' },
        ];
       this. state=true
        m.unsubscribe();
        this.http.data.next([]);
      });
    });
  }
}
