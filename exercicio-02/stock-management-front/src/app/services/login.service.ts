import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { LoginStore } from '../stores/login.store';


@Injectable({
  providedIn: "root"
})

export class LoginService {
  protected API_LOGIN_URL = 'http://localhost:8181/auth/login';

  constructor(private _http: HttpClient, private loginStore: LoginStore) { }


  submitLogin(login: { username: string; password: string; }) {

    let token = this._http.post<string>(
      this.API_LOGIN_URL,
      {
        userName: login.username,
        password: login.password
      }
    );
    this.loginStore.updateToken(token);
  }

}
