import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginStore } from '../stores/login.store';

@Injectable({
  providedIn: "root"
})

export class AuthInterceptorService implements HttpInterceptor {

  private authToken: string = '';

  constructor(private loginStore: LoginStore) {
    loginStore.authToken$.subscribe(token => this.authToken = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: [this.authToken]
      }
    });
    return next.handle(authReq);
  }
}