import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoaaService {
  private noaaUrl = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/locations/ZIP:55448';
  private tempUrl = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?locationid=ZIP:55448&datacategoryid=TEMP';
  private token = 'HaCICNJofAcIyUruncHUBNsYheJdeECh';

  constructor(private http: Http) {}

  getData() {
    let headers = new Headers({ 'token': this.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.tempUrl, options)
      .toPromise()
      .then(response => {
        console.warn('Good', response.json());
        return response.json();
      })
      .catch(() => {
        console.error('You Fail');
      })
  }
}
