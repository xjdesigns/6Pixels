import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-welcome',
  templateUrl: 'app/components/welcome/welcome.component.html',
  providers: [ WeatherService ]
})

export class WelcomeComponent implements OnInit {
  weather = {};
  temperature = '0';

  constructor(private w: WeatherService) {}

  ngOnInit() {
    // this.getData();
  }

  getData() {
    this.w
      .getWeather()
      .then(weather => {
        this.weather = weather;
        this.displayWeatherData(weather);
      })
  }

  displayWeatherData(d) {
    let kel = d.main.temp.toString();
    this.temperature = kel.split(".", 1);
  }

  convertKelvinToFar(kelvinValue) {
    return (( kelvinValue - 273.15) * 9/5) + 32;
  }
}
