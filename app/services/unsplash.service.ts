import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UnsplashService {
  private unsplashUrl = 'https://api.unsplash.com/photos/';

  constructor(private http: Http) { }

  getPhotos() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('client_id', "5953e9fa564ea21dd6e842143990838cd5c7bbf16d49831ab571527b70170af3");
    params.set('per_page', "60");
    return this.http.get(this.unsplashUrl, { search: params })
              .toPromise()
              .then(response => {
                return response.json()
              })
              .catch(() => {
                alert('Oops, I shit my pants');
              });
  }
}
