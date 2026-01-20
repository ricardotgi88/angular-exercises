import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { LoginStore } from '../stores/login.store';
import { LoginDataService } from './login-data.service';
import { switchMap, tap } from 'rxjs';


@Injectable({
  providedIn: "root"
})

export class LoginService {
  protected API_LOGIN_URL = 'http://localhost:8181/auth/login';

  constructor(private loginDataService: LoginDataService, private loginStore: LoginStore) { }


  submitLogin(login: { username: string; password: string; }) {
    let res = this.loginDataService.submitLogin(login).pipe(tap(newToken=> {
      console.log(newToken);
      this.loginStore.updateToken(newToken);
    }));
    
    return res;
  }


  submitTest() {
    this.loginDataService.submitTest();
  }

}
