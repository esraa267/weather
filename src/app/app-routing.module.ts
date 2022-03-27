import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutrrentWeatherComponent } from './components/cutrrent-weather/cutrrent-weather.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { Next10daysComponent } from './components/next10days/next10days.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'',component:CutrrentWeatherComponent},
  {path:'search/:q',component:SearchComponent},
  {path:'hourly/:l/:index',component:HourlyComponent},
  {path:'10days/:l',component:Next10daysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
