import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
  // api.openweathermap.org/data/2.5/weather
  private weatherURL = `http://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: Http) { }

  getWeather() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', "5022025");
    params.set('units', "imperial"); // returns fahrenheit
    params.set('APPID', "d49417e4e28b3397686c99a517d86567");

    return this.http.get(this.weatherURL, { search: params })
      .toPromise()
      .then(response => {
        return response.json()
      })
      .catch(() => {
        alert('Oops no data was found');
      });
  }
}
