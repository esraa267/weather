import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  data = new Subject<any>();

  constructor(private http: HttpClient) {}
  getCurrentweather() {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        this.searchByLatLog(`${p.coords.latitude},${p.coords.longitude}`);
      },
      () => {}
    );
  }
  // searchBycountry(word: string) {
  //   return this.http.get<any>(
  //     `${environment.BASEURL}search.ashx?query=${word}&num_of_results=1&format=json&key=${environment.KEY}`
  //   );
  // }
  searchByLatLog(lat: string) {
    this.http
      .get<any>(
        `${environment.BASEURL}weather.ashx?key=${environment.KEY}&q=${lat}&num_of_days=10&format=json&fx24=yes&includelocation=yes&aqi=yes&tp=1`
      )
      .subscribe((e) => {
        console.log(e);

        this.data.next(e.data);
      });
  }

  js() {
    return this.http.get('assets/data.json');
  }
}
