import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BrowserXhr } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginServiceService {

  constructor(private http: Http, private router: Router) { }
  getToken(username, password) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post('/api/auth/token', { 'username': username, 'password': password }, options)
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error.json().error || ' Username Password missmatch'));

  }
}
