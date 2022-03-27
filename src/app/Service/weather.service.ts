import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}
  checkQualityIndex(index: number): string {
    switch (index) {
      case 1:
        return 'Good';
      case 2:
        return 'Moderate';
      case 3 || 4:
        return 'Unhealthy';

      case 5:
        return 'Very Unhealthy';
      case 6:
        return 'Hazardous';
      default:
        return '';
    }
  }

  checkTime(time: string): string {
    if (Number(time) >= 1 && Number(time) > 12) {
      return `${Number(time) - 12}PM`;
    } else if (Number(time) >= 1 && Number(time) < 12) {
      return `${Number(time)}AM`;
    } else if (Number(time) == 0) {
      return `${12}AM`;
    } else {
      return `${12}PM`;
    }
  }
  getDay(date: string): string {
    const week = ['Sun', 'Mon', 'Teus', 'Wens', 'Thu', 'Fri', 'Sat'];
    var d = new Date(date).getUTCDay();
    return week[d];
  }
  formatDate(date:string):string{
      return date.split('-')[1]+'/'+date.split('-')[2]
  }
}
