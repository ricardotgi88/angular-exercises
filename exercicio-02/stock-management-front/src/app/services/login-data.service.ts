import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { LoginStore } from '../stores/login.store';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})

export class LoginDataService {
  protected API_LOGIN_URL = 'http://localhost:8181/auth/login';

  constructor(private _http: HttpClient, private loginStore: LoginStore) { }


  submitLogin(login: { username: string; password: string; }): Observable<string> {

    let res = this._http.post<string>(
      this.API_LOGIN_URL,
      {
        userName: login.username,
        password: login.password
      }
    );

    return res;
  }
  
  submitTest() {
    let token = this._http.get<string>('http://localhost:8181/stockaccess/item/read');
    token.subscribe((token) => console.log(token));
  }

}
