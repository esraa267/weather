import { CutrrentWeatherComponent } from './components/cutrrent-weather/cutrrent-weather.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DailyForcastComponent } from './components/daily-forcast/daily-forcast.component';
import { TodayForcastComponent } from './components/today-forcast/today-forcast.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { Next10daysComponent } from './components/next10days/next10days.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CutrrentWeatherComponent,
    SearchComponent,
    LineChartComponent,
    DailyForcastComponent,
    TodayForcastComponent,
    HourlyComponent,
    WeatherCardComponent,
    Next10daysComponent,
    CardsComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
